from __future__ import annotations

import json
from collections import defaultdict
from pathlib import Path


SOURCE = Path(r"C:\Users\annag\Downloads\Studio21-Vagaro-Appointments-Consolidated.json")


def main() -> None:
    payload = json.loads(SOURCE.read_text(encoding="utf-8"))
    grouped: dict[tuple[str, str, int | None], list[dict]] = defaultdict(list)
    for item in payload["appReadyUpcomingAppointments"]:
        grouped[(item["service"], item["clientId"], item["priceCents"])].append(item)

    # The consolidated file intentionally omits names from app-ready rows. Match
    # its stable ordering back to the active source rows for local analysis only.
    source_names = {
        ready["sourceId"]: raw["customer"]
        for ready, raw in zip(
            payload["appReadyUpcomingAppointments"],
            payload["activeUpcomingAppointments"],
        )
    }

    for (service, client_id, price_cents), items in sorted(grouped.items()):
        name = source_names.get(items[0]["sourceId"], client_id)
        dates = sorted(item["date"] for item in items)
        price = "none" if price_cents is None else f"{price_cents / 100:.2f}"
        print(f"{service} | {name} | {price} | {len(items)} | {dates[0]}..{dates[-1]}")


if __name__ == "__main__":
    main()
