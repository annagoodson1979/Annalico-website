from __future__ import annotations

import argparse
import glob
import hashlib
import json
import re
import zipfile
from collections import Counter, defaultdict
from datetime import datetime
from decimal import Decimal, InvalidOperation
from pathlib import Path
from xml.etree import ElementTree as ET


MAIN_NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
NS = {"x": MAIN_NS}
APPOINTMENT_FORMAT = "%b %d, %Y - %I:%M %p"
ACTIVE_UPCOMING_STATUSES = {"Accepted", "Awaiting Confirmation", "Confirmed"}
MONEY_HEADERS = {"Price", "Tax", "Discount", "Paid", "Tip"}
INTEGER_HEADERS = {"Pts Gained", "Pts Redeemed"}


def read_shared_strings(archive: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in archive.namelist():
        return []
    root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
    values = []
    for item in root.findall("x:si", NS):
        values.append("".join(node.text or "" for node in item.findall(".//x:t", NS)))
    return values


def cell_value(cell: ET.Element, shared_strings: list[str]) -> str:
    cell_type = cell.attrib.get("t")
    if cell_type == "inlineStr":
        return "".join(node.text or "" for node in cell.findall(".//x:t", NS))
    value_node = cell.find("x:v", NS)
    if value_node is None or value_node.text is None:
        return ""
    value = value_node.text
    if cell_type == "s":
        return shared_strings[int(value)]
    return value


def column_number(reference: str) -> int:
    letters = re.match(r"[A-Z]+", reference)
    if not letters:
        raise ValueError(f"Invalid cell reference: {reference}")
    result = 0
    for character in letters.group(0):
        result = result * 26 + ord(character) - ord("A") + 1
    return result


def read_sheet_rows(path: Path) -> list[list[str]]:
    with zipfile.ZipFile(path) as archive:
        shared_strings = read_shared_strings(archive)
        root = ET.fromstring(archive.read("xl/worksheets/sheet1.xml"))
    rows: list[list[str]] = []
    for row_node in root.findall(".//x:sheetData/x:row", NS):
        row_values: dict[int, str] = {}
        for cell in row_node.findall("x:c", NS):
            row_values[column_number(cell.attrib["r"])] = cell_value(cell, shared_strings)
        if row_values:
            rows.append([row_values.get(index, "") for index in range(1, max(row_values) + 1)])
    return rows


def parse_decimal(value: str) -> str | None:
    cleaned = value.strip()
    if not cleaned or cleaned == "---":
        return None
    try:
        return format(Decimal(cleaned), "f")
    except InvalidOperation:
        return cleaned


def parse_integer(value: str) -> int | str | None:
    cleaned = value.strip()
    if not cleaned or cleaned == "---":
        return None
    try:
        return int(cleaned)
    except ValueError:
        return cleaned


def parse_datetime(value: str) -> str | None:
    cleaned = value.strip()
    if not cleaned or cleaned == "---":
        return None
    return datetime.strptime(cleaned, APPOINTMENT_FORMAT).isoformat(timespec="minutes")


def normalize_customer(value: str) -> str:
    return re.sub(r"\s+", " ", value.strip()).casefold()


def parse_workbook(path: Path) -> tuple[str, list[dict], list[str]]:
    rows = read_sheet_rows(path)
    errors: list[str] = []
    if not rows or not rows[0] or not rows[0][0].startswith("Customer:"):
        return "", [], ["missing Customer header"]
    customer = rows[0][0].split(":", 1)[1].strip()
    if len(rows) < 2:
        return customer, [], []

    header_index = next(
        (index for index, row in enumerate(rows) if row and row[0] == "Appointment Date"),
        None,
    )
    if header_index is None:
        return customer, [], ["missing appointment column headers"]

    headers = rows[header_index]
    appointments: list[dict] = []
    for row_offset, row in enumerate(rows[header_index + 1 :], start=header_index + 2):
        if not row or not row[0].strip():
            continue
        padded = row + [""] * (len(headers) - len(row))
        raw = dict(zip(headers, padded[: len(headers)]))
        try:
            record = {
                "customer": customer,
                "appointmentDate": parse_datetime(raw.get("Appointment Date", "")),
                "checkoutDate": parse_datetime(raw.get("Checkout Date", "")),
                "type": raw.get("Type", "").strip() or None,
                "status": raw.get("Status", "").strip() or None,
                "serviceProvider": raw.get("Service Provider", "").strip() or None,
                "service": raw.get("Service", "").strip() or None,
                "price": parse_decimal(raw.get("Price", "")),
                "tax": parse_decimal(raw.get("Tax", "")),
                "discount": parse_decimal(raw.get("Discount", "")),
                "paid": parse_decimal(raw.get("Paid", "")),
                "tip": parse_decimal(raw.get("Tip", "")),
                "pointsGained": parse_integer(raw.get("Pts Gained", "")),
                "pointsRedeemed": parse_integer(raw.get("Pts Redeemed", "")),
                "sourceFile": path.name,
                "sourceRow": row_offset,
            }
        except ValueError as exc:
            errors.append(f"row {row_offset}: {exc}")
            continue
        if not record["appointmentDate"]:
            errors.append(f"row {row_offset}: missing appointment date")
            continue
        appointments.append(record)
    return customer, appointments, errors


def semantic_key(record: dict) -> tuple:
    return tuple(
        record.get(field)
        for field in (
            "customer",
            "appointmentDate",
            "checkoutDate",
            "type",
            "status",
            "serviceProvider",
            "service",
            "price",
            "tax",
            "discount",
            "paid",
            "tip",
            "pointsGained",
            "pointsRedeemed",
        )
    )


def conflict_key(record: dict) -> tuple:
    return (
        normalize_customer(record["customer"]),
        record.get("appointmentDate"),
        (record.get("service") or "").casefold(),
        (record.get("serviceProvider") or "").casefold(),
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input-dir", required=True)
    parser.add_argument("--output")
    parser.add_argument("--profiles-import")
    args = parser.parse_args()

    pattern = str(Path(args.input_dir) / "Customer Appointments*.xlsx")
    files = [Path(path) for path in glob.glob(pattern)]
    files.sort(key=lambda path: path.stat().st_mtime)

    raw_records: list[dict] = []
    file_errors: dict[str, list[str]] = {}
    customer_files: defaultdict[str, list[str]] = defaultdict(list)
    display_names: dict[str, str] = {}

    for path in files:
        customer, records, errors = parse_workbook(path)
        if customer:
            normalized = normalize_customer(customer)
            customer_files[normalized].append(path.name)
            display_names.setdefault(normalized, customer)
        raw_records.extend(records)
        if errors:
            file_errors[path.name] = errors

    unique_by_key: dict[tuple, dict] = {}
    duplicate_sources: defaultdict[tuple, list[dict]] = defaultdict(list)
    for record in raw_records:
        key = semantic_key(record)
        if key in unique_by_key:
            duplicate_sources[key].append(
                {"sourceFile": record["sourceFile"], "sourceRow": record["sourceRow"]}
            )
            continue
        unique_by_key[key] = record

    appointments = list(unique_by_key.values())
    appointments.sort(key=lambda item: (item["appointmentDate"], item["customer"].casefold(), item.get("service") or ""))

    conflicts: defaultdict[tuple, list[dict]] = defaultdict(list)
    for record in appointments:
        conflicts[conflict_key(record)].append(record)
    conflict_groups = [records for records in conflicts.values() if len(records) > 1]

    # This laptop is configured for the Studio's America/Chicago local time.
    now = datetime.now()
    future = [record for record in appointments if datetime.fromisoformat(record["appointmentDate"]) >= now]
    past = [record for record in appointments if datetime.fromisoformat(record["appointmentDate"]) < now]
    active_upcoming = [record for record in future if record.get("status") in ACTIVE_UPCOMING_STATUSES]
    inactive_future = [record for record in future if record.get("status") not in ACTIVE_UPCOMING_STATUSES]

    status_counts = Counter(record.get("status") or "(blank)" for record in appointments)
    duplicate_file_groups = {
        display_names[key]: names for key, names in customer_files.items() if len(names) > 1
    }

    profile_ids: defaultdict[str, list[str]] = defaultdict(list)
    if args.profiles_import:
        prepared_import = json.loads(Path(args.profiles_import).read_text(encoding="utf-8"))
        for profile in prepared_import.get("records", {}).get("profiles", []):
            profile_ids[normalize_customer(str(profile.get("name", "")))].append(str(profile.get("id", "")))

    status_for_studio = {
        "Accepted": "confirmed",
        "Confirmed": "confirmed",
        "Awaiting Confirmation": "needs-reply",
    }
    app_ready_upcoming = []
    for record in active_upcoming:
        matches = profile_ids.get(normalize_customer(record["customer"]), [])
        semantic = "|".join("" if value is None else str(value) for value in semantic_key(record))
        app_ready_upcoming.append(
            {
                "sourceId": "vagaro-" + hashlib.sha256(semantic.encode("utf-8")).hexdigest()[:24],
                "clientId": matches[0] if len(matches) == 1 else None,
                "date": record["appointmentDate"][:10],
                "time": record["appointmentDate"][11:16],
                "durationMinutes": None,
                "durationNote": "The Vagaro customer-history export did not include appointment duration.",
                "service": record["service"],
                "priceCents": int(Decimal(record["price"]) * 100) if record["price"] is not None else None,
                "status": status_for_studio[record["status"]],
                "sourceStatus": record["status"],
                "serviceProvider": record["serviceProvider"],
            }
        )

    payload = {
        "kind": "studio21-vagaro-appointments",
        "version": 1,
        "createdAt": datetime.now().isoformat(timespec="seconds"),
        "source": {
            "system": "Vagaro",
            "inputPattern": "Customer Appointments*.xlsx",
            "filesProcessed": len(files),
        },
        "summary": {
            "clientFiles": len(files),
            "uniqueClients": len(customer_files),
            "rawAppointmentRows": len(raw_records),
            "uniqueAppointments": len(appointments),
            "duplicatesRemoved": len(raw_records) - len(appointments),
            "futureAppointments": len(future),
            "activeUpcomingAppointments": len(active_upcoming),
            "deletedOrDeniedFutureAppointments": len(inactive_future),
            "pastAppointments": len(past),
            "earliestAppointment": appointments[0]["appointmentDate"] if appointments else None,
            "latestAppointment": appointments[-1]["appointmentDate"] if appointments else None,
            "statusCounts": dict(sorted(status_counts.items())),
            "filesWithErrors": len(file_errors),
            "conflictGroups": len(conflict_groups),
            "upcomingAppointmentsMatchedToOneProfile": sum(item["clientId"] is not None for item in app_ready_upcoming),
            "upcomingAppointmentsNeedingDuration": sum(item["durationMinutes"] is None for item in app_ready_upcoming),
        },
        "appReadyUpcomingAppointments": app_ready_upcoming,
        "activeUpcomingAppointments": active_upcoming,
        "appointments": appointments,
        "duplicateClientDownloads": duplicate_file_groups,
        "fileErrors": file_errors,
        "conflicts": conflict_groups,
    }

    print(json.dumps(payload["summary"], indent=2))
    if args.output:
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
