import { useMemo, useState } from "react";
import {
  buildServiceTimeline,
  colorCut,
  getOverlapMinutes,
  getServiceDuration,
  getStylistRequiredMinutes,
} from "../scheduling/serviceSteps";

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
  colorCut: {
    label: colorCut.name,
    steps: colorCut.steps,
    buffer: 0,
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

function getServiceMinutes(service, includeOptionalSteps) {
  if (service.steps) {
    return getServiceDuration(service, includeOptionalSteps);
  }

  return service.duration;
}

function getSmartTimeSlots(dateValue, serviceKey, clientType, includeOptionalSteps) {
  const service = services[serviceKey];

  if (!dateValue || !service) return [];

  const businessRules = rules[service.business];
  const dayName = getDayName(dateValue);

  if (!businessRules.workDays.includes(dayName)) return [];

  const [open, close] = businessRules.hoursByDay[dayName] || [];

  if (!open || !close) return [];

  const serviceLength = getServiceMinutes(service, includeOptionalSteps) + service.buffer;
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
  const [selectedTime, setSelectedTime] = useState("");
  const [includeOptionalSteps, setIncludeOptionalSteps] = useState(true);
  const [accessCode, setAccessCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const availableTimes = useMemo(
    () => getSmartTimeSlots(date, service, clientType, includeOptionalSteps),
    [date, service, clientType, includeOptionalSteps]
  );

  const selectedService = services[service];
  const serviceMinutes = getServiceMinutes(selectedService, includeOptionalSteps);
  const serviceTimeline = selectedService.steps
    ? buildServiceTimeline(selectedService, selectedTime || "09:00", includeOptionalSteps)
    : [];
  const stylistMinutes = selectedService.steps
    ? getStylistRequiredMinutes(selectedService, includeOptionalSteps)
    : serviceMinutes;
  const overlapMinutes = selectedService.steps
    ? getOverlapMinutes(selectedService, includeOptionalSteps)
    : 0;
  const overlapStep = serviceTimeline.find((step) => step.overlapAllowed);

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

        <select
          value={clientType}
          onChange={(event) => {
            setClientType(event.target.value);
            setSelectedTime("");
          }}
        >
          <option value="regular">Regular Client</option>
          <option value="VIP">VIP Client</option>
        </select>

        <select
          value={service}
          onChange={(event) => {
            setService(event.target.value);
            setSelectedTime("");
          }}
          required
        >
          {Object.entries(services).map(([key, serviceOption]) => (
            <option value={key} key={key}>
              {serviceOption.label} - {getServiceMinutes(serviceOption, includeOptionalSteps)} min
            </option>
          ))}
        </select>

        {selectedService.steps ? (
          <section className="service-flow" aria-label={`${selectedService.label} service flow`}>
            <div className="service-flow-heading">
              <div>
                <span>Smart service flow</span>
                <h2>{selectedService.label}</h2>
              </div>

              <label className="optional-step-toggle">
                <input
                  type="checkbox"
                  checked={includeOptionalSteps}
                  onChange={(event) => {
                    setIncludeOptionalSteps(event.target.checked);
                    setSelectedTime("");
                  }}
                />
                Include blow-dry
              </label>
            </div>

            <div className="service-flow-summary">
              <span><strong>{serviceMinutes}</strong> visit minutes</span>
              <span><strong>{stylistMinutes}</strong> hands-on minutes</span>
              <span className="overlap-summary"><strong>{overlapMinutes}</strong> flexible minutes</span>
            </div>

            <div className="service-timeline">
              {serviceTimeline.map((step) => (
                <article
                  className={step.overlapAllowed ? "service-step overlap-step" : "service-step"}
                  key={step.name}
                  style={{ flexGrow: step.minutes }}
                >
                  <strong>{step.name}</strong>
                  <span>{step.minutes} min</span>
                  {selectedTime ? <small>{step.start}–{step.end}</small> : null}
                </article>
              ))}
            </div>

            <p className="service-flow-note">
              {selectedTime && overlapStep
                ? `The stylist is free from ${overlapStep.start} to ${overlapStep.end}, so another client can be served during processing.`
                : "The gold processing block is the safe overlap window for another client."}
            </p>
          </section>
        ) : null}

        <input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
            setSelectedTime("");
          }}
          required
        />

        <select
          value={selectedTime}
          onChange={(event) => setSelectedTime(event.target.value)}
          required
        >
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
