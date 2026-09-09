export type ServiceStep = {
  name: string;
  minutes: number;
  stylistRequired: boolean;
  overlapAllowed: boolean;
  optional: boolean;
};

export type StepBasedService = {
  name: string;
  steps: ServiceStep[];
};

export type ScheduledServiceStep = ServiceStep & {
  start: string;
  end: string;
};

export const colorCut: StepBasedService = {
  name: "Color + Cut",
  steps: [
    {
      name: "Color Application",
      minutes: 30,
      stylistRequired: true,
      overlapAllowed: false,
      optional: false,
    },
    {
      name: "Processing",
      minutes: 40,
      stylistRequired: false,
      overlapAllowed: true,
      optional: false,
    },
    {
      name: "Rinse",
      minutes: 15,
      stylistRequired: true,
      overlapAllowed: false,
      optional: false,
    },
    {
      name: "Haircut",
      minutes: 30,
      stylistRequired: true,
      overlapAllowed: false,
      optional: false,
    },
    {
      name: "Blow-dry",
      minutes: 30,
      stylistRequired: true,
      overlapAllowed: false,
      optional: true,
    },
  ],
};

export function getActiveSteps(service: StepBasedService, includeOptionalSteps = true) {
  return service.steps.filter((step) => includeOptionalSteps || !step.optional);
}

export function getServiceDuration(service: StepBasedService, includeOptionalSteps = true) {
  return getActiveSteps(service, includeOptionalSteps).reduce(
    (total, step) => total + step.minutes,
    0,
  );
}

export function getStylistRequiredMinutes(
  service: StepBasedService,
  includeOptionalSteps = true,
) {
  return getActiveSteps(service, includeOptionalSteps).reduce(
    (total, step) => total + (step.stylistRequired ? step.minutes : 0),
    0,
  );
}

export function getOverlapMinutes(service: StepBasedService, includeOptionalSteps = true) {
  return getActiveSteps(service, includeOptionalSteps).reduce(
    (total, step) => total + (step.overlapAllowed ? step.minutes : 0),
    0,
  );
}

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number) {
  const normalizedMinutes = totalMinutes % (24 * 60);
  const hours = Math.floor(normalizedMinutes / 60);
  const minutes = normalizedMinutes % 60;
  const suffix = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

export function buildServiceTimeline(
  service: StepBasedService,
  startTime: string,
  includeOptionalSteps = true,
): ScheduledServiceStep[] {
  let cursor = timeToMinutes(startTime);

  return getActiveSteps(service, includeOptionalSteps).map((step) => {
    const start = minutesToTime(cursor);
    cursor += step.minutes;

    return {
      ...step,
      start,
      end: minutesToTime(cursor),
    };
  });
}
