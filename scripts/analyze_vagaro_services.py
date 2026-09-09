from __future__ import annotations

import argparse
import difflib
import json
from pathlib import Path

from consolidate_vagaro_appointments import read_sheet_rows


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--services", required=True)
    parser.add_argument("--appointments")
    args = parser.parse_args()

    rows = read_sheet_rows(Path(args.services))
    if not rows:
        raise SystemExit("The service workbook is empty.")
    headers = rows[0]
    services = [
        dict(zip(headers, row + [""] * (len(headers) - len(row))))
        for row in rows[1:]
    ]

    print(f"service_rows: {len(services)}")
    print(f"unique_names: {len({item['Service/Class Name'] for item in services})}")
    print(
        "durations: "
        + ", ".join(
            str(value)
            for value in sorted({int(item["Duration"]) for item in services})
        )
    )

    if not args.appointments:
        return

    appointment_payload = json.loads(
        Path(args.appointments).read_text(encoding="utf-8")
    )
    active_services = sorted(
        {
            item["service"]
            for item in appointment_payload["appReadyUpcomingAppointments"]
        }
    )
    names = [item["Service/Class Name"] for item in services]
    print("active_upcoming_mappings:")
    for active_name in active_services:
        exact = next(
            (
                item
                for item in services
                if item["Service/Class Name"].casefold() == active_name.casefold()
            ),
            None,
        )
        if exact:
            result = f"{exact['Duration']} min / price {exact['Price']}"
        else:
            close = difflib.get_close_matches(active_name, names, n=3, cutoff=0.5)
            result = f"NO EXACT MATCH; closest={close}"
        print(f"{active_name} => {result}")


if __name__ == "__main__":
    main()
