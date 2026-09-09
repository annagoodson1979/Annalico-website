from __future__ import annotations

import argparse
import hashlib
import json
import re
from decimal import Decimal
from pathlib import Path

from consolidate_vagaro_appointments import read_sheet_rows


KIND = "studio21-consolidated-records-v2"
NOTARY_SERVICES = {
    "General Notarization",
    "Remote Online Notarization (RON)",
    "I-9 Employment Verification",
    "Mobile Notary Service",
    "Printing Services",
    "Document Scan & Return",
}

# These three names were not exact matches in the exported service workbook. Their
# lengths were verified against the supplied Vagaro agenda screenshots.
VERIFIED_DEFAULTS = {
    "Disc. Cut": 30,
    "Partial Highlight, Root Color Touch-up and Haircut Only": 90,
    "Partial Highlight, Root Color Touch-Up and Haircut Blow-Dry": 120,
}

# A few recurring appointments visibly used a longer block than their service's
# normal length. Keep those exact blocks without changing the service default.
VERIFIED_APPOINTMENT_OVERRIDES = {
    ("beth taylor", "2026-09-19", "Color Root Touch-Up and Haircut Only"): 105,
    ("beth taylor", "2026-10-24", "Color Root Touch-Up and Haircut Only"): 90,
    ("beth taylor", "2026-11-21", "Color Root Touch-Up and Haircut Only"): 105,
    ("beth taylor", "2026-12-19", "Color Root Touch-Up and Haircut Only"): 90,
    ("trista strenger", "2026-11-05", "Color Root Touch-Up and Haircut Only"): 105,
}


def normalized(value: str) -> str:
    return re.sub(r"\s+", " ", value.strip()).casefold()


def cents(value: str) -> int:
    return int(Decimal(value.strip() or "0") * 100)


def compact_sha256(value: object) -> str:
    wire = json.dumps(value, ensure_ascii=False, separators=(",", ":"))
    return hashlib.sha256(wire.encode("utf-8")).hexdigest()


def service_catalog(path: Path) -> list[dict]:
    rows = read_sheet_rows(path)
    if not rows:
        raise ValueError("The service workbook is empty.")
    headers = rows[0]
    result: list[dict] = []
    seen: set[str] = set()
    for row in rows[1:]:
        item = dict(zip(headers, row + [""] * (len(headers) - len(row))))
        name = item.get("Service/Class Name", "").strip()
        if not name or name in NOTARY_SERVICES:
            continue
        key = normalized(name)
        if key in seen:
            raise ValueError(f"Unexpected duplicate salon service: {name}")
        seen.add(key)
        duration = int(item["Duration"])
        result.append(
            {
                "id": "service-" + hashlib.sha256(key.encode("utf-8")).hexdigest()[:20],
                "name": name,
                "priceCents": cents(item.get("Price", "0")),
                "minutes": duration,
                "active": True,
                "pointsGiven": int(item.get("Points Given", "0") or 0),
                "pointsToRedeem": int(item.get("Points to Redeem", "0") or 0),
                "steps": [
                    {
                        "name": "Service appointment",
                        "minutes": duration,
                        "stylistRequired": True,
                        "overlapAllowed": False,
                        "optional": False,
                    }
                ],
            }
        )
    return sorted(result, key=lambda item: normalized(item["name"]))


def prepare(complete_path: Path, appointments_path: Path, services_path: Path) -> dict:
    complete = json.loads(complete_path.read_text(encoding="utf-8"))
    appointments_source = json.loads(appointments_path.read_text(encoding="utf-8"))
    catalog = service_catalog(services_path)
    durations = {normalized(item["name"]): item["minutes"] for item in catalog}
    durations.update({normalized(name): minutes for name, minutes in VERIFIED_DEFAULTS.items()})

    appointments: list[dict] = []
    missing: list[str] = []
    profile_names = {
        profile["id"]: normalized(profile["name"])
        for profile in complete["records"]["profiles"]
    }
    for source in appointments_source["appReadyUpcomingAppointments"]:
        service = source["service"]
        client_id = source["clientId"]
        if not client_id or client_id not in profile_names:
            raise ValueError(f"Upcoming appointment is not matched to one client: {source['sourceId']}")
        override_key = (profile_names[client_id], source["date"], service)
        duration = VERIFIED_APPOINTMENT_OVERRIDES.get(override_key)
        duration_source = "agenda-screenshot" if duration is not None else "service-default"
        if duration is None:
            duration = durations.get(normalized(service))
        if duration is None:
            missing.append(service)
            continue
        appointments.append(
            {
                "id": source["sourceId"],
                "clientId": client_id,
                "date": source["date"],
                "time": source["time"],
                "minutes": duration,
                "service": service,
                "priceCents": source["priceCents"],
                "status": source["status"],
                "note": "",
                "sourceStatus": source["sourceStatus"],
                "serviceProvider": source["serviceProvider"] or "",
                "durationSource": duration_source,
                "overlapPolicy": "imported",
            }
        )
    if missing:
        raise ValueError("Missing durations for: " + ", ".join(sorted(set(missing))))

    supplement = {"appointments": appointments, "serviceCatalog": catalog}
    complete["kind"] = KIND
    complete["supplement"] = supplement
    complete["supplementSha256"] = compact_sha256(supplement)
    return complete


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--complete", required=True)
    parser.add_argument("--appointments", required=True)
    parser.add_argument("--services", required=True)
    parser.add_argument("--output", required=True)
    args = parser.parse_args()
    payload = prepare(Path(args.complete), Path(args.appointments), Path(args.services))
    output = Path(args.output)
    output.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(
        json.dumps(
            {
                "output": str(output),
                "clients": len(payload["records"]["profiles"]),
                "appointments": len(payload["supplement"]["appointments"]),
                "services": len(payload["supplement"]["serviceCatalog"]),
                "bytes": output.stat().st_size,
                "supplementSha256": payload["supplementSha256"],
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
