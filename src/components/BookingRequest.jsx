import { useMemo, useState } from "react";

const SMART_WINDOW_MINUTES = 90;
const correctCode = "OG-POP";

const services = {
  haircut: {
    label: "Haircut",
    duration: 60,
    buffer: 15,
    price: 85,
    business: "salon",
  },
  color: {
    label: "Color",
    duration: 180,
    buffer: 30,
    price: 250,
    business: "salon",
  },
  silkPress: {
    label: "Silk Press",
    duration: 120,
    buffer: 15,
    price: 150,
    business: "salon",
  },
  notary: {
    label: "Notary Appointment",
    duration: 30,
    buffer: 0,
    price: 25,
    business: "notary",
  },
  consultation: {
    label: "Consultation",
    duration: 30,
    buffer: 0,
    price: 0,
    business: "salon",
  },
};

const rules = {
  salon: {
    workDays: ["Tuesday", "Thursday", "Saturday"],
    hoursByDay: {
      Tuesday: ["09:00", "15:00"],
      Thursday: ["11:00", "18:00"],
      Saturday: ["09:00", "15:00"],
    },
    smartFill: true,
  },
  notary: {
    workDays: ["Monday", "Wednesday", "Friday"],
    hoursByDay: {
      Monday: ["09:00", "15:00"],
      Wednesday: ["09:00", "15:00"],
      Friday: ["09:00", "15:00"],
    },
    smartFill: true,
  },
};

// This is where Google Calendar busy events can be injected once the backend is connected.
const busyEvents = [];

function isNearBooking(slotStart, events) {
  return events.some((event) => {
    const eventStart = new Date(event.start).getTime();
    const eventEnd = new Date(event.end).getTime();
    const slot = new Date(slotStart).getTime();

    const beforeEvent = Math.abs(eventStart - slot) / 60000;
    const afterEvent = Math.abs(slot - eventEnd) / 60000;

    return beforeEvent <= SMART_WINDOW_MINUTES || afterEvent <= SMART_WINDOW_MINUTES;
  });
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function getDayName(dateValue) {
  if (!dateValue) return "";

  return new Date(`${dateValue}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
  });
}

function getSmartTimeSlots(dateValue, serviceKey, clientType) {
  const service = services[serviceKey];

  if (!dateValue || !service) return [];

  const businessRules = rules[service.business];
  const dayName = getDayName(dateValue);

  if (!businessRules.workDays.includes(dayName)) return [];

  const [open, close] = businessRules.hoursByDay[dayName] || [];

  if (!open || !close) return [];

  const serviceLength = service.duration + service.buffer;
  const openMinutes = timeToMinutes(open);
  const closeMinutes = timeToMinutes(close);
  const slots = [];

  for (let time = openMinutes; time + serviceLength <= closeMinutes; time += 30) {
    const value = minutesToTime(time);
    const slotStart = `${dateValue}T${value}:00`;
    const smartFillAllowed =
      !businessRules.smartFill ||
      clientType === "VIP" ||
      busyEvents.length === 0 ||
      isNearBooking(slotStart, busyEvents);

    if (smartFillAllowed) {
      slots.push(value);
    }
  }

  return slots;
}

export default function BookingRequest() {
  const [service, setService] = useState("haircut");
  const [date, setDate] = useState("");
  const [clientType, setClientType] = useState("regular");
  const [accessCode, setAccessCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const availableTimes = useMemo(
    () => getSmartTimeSlots(date, service, clientType),
    [date, service, clientType]
  );

  const unlockPage = () => {
    if (accessCode === correctCode) {
      setUnlocked(true);
    } else {
      alert("Invalid access code");
    }
  };

  return (
    <section id="appointments" className="booking-section">
      <div className="booking-section-copy">
        <p className="section-kicker">Appointments</p>
        <h1>Request an Appointment</h1>
        <p>Submit your details and we'll confirm availability.</p>
      </div>

      <form className="booking-form">
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" />

        <select value={clientType} onChange={(event) => setClientType(event.target.value)}>
          <option value="regular">Regular Client</option>
          <option value="VIP">VIP Client</option>
        </select>

        <select value={service} onChange={(event) => setService(event.target.value)} required>
          {Object.entries(services).map(([key, serviceOption]) => (
            <option value={key} key={key}>
              {serviceOption.label} - {serviceOption.duration} min
            </option>
          ))}
        </select>

        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />

        <select required>
          <option value="">Choose Time</option>
          {availableTimes.map((time) => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>

        <textarea placeholder="Notes, location, or service details" />

        <button type="submit">Send Request</button>
      </form>

      <p className="booking-note">
        Appointment requests are not confirmed until you receive a confirmation message.
      </p>

      <div className="private-booking">
        <p className="section-kicker">Private Booking</p>
        <div className="private-access">
          <input
            value={accessCode}
            onChange={(event) => setAccessCode(event.target.value)}
            placeholder="Enter Access Code"
          />

          <button type="button" onClick={unlockPage}>
            Enter
          </button>
        </div>

        {unlocked && (
          <div className="hidden-content">
            <img src="/olivia-flyer.jpg" alt="Olivia Experience Flyer" />

            <a href="https://ynxnotary.com/notary">Reserve Appointment</a>
          </div>
        )}
      </div>
    </section>
  );
}
