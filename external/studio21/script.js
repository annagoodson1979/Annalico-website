const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const ownerEye = document.querySelector(".owner-easter-egg");
const ownerTooth = document.querySelector(".owner-tooth-egg");
const ownerRiddle = document.querySelector(".owner-riddle");
const ownerRiddleForm = document.querySelector("#ownerRiddleForm");
const ownerRiddleMessage = document.querySelector("#ownerRiddleMessage");
let ownerShortcutStartedAt = 0;
let ownerShortcutTimer = 0;

function failOwnerShortcut() {
  window.clearTimeout(ownerShortcutTimer);
  ownerShortcutStartedAt = 0;
  if (ownerRiddleMessage) ownerRiddleMessage.textContent = "Wrong passcode.";
}

if (ownerEye && ownerTooth && ownerRiddle) {
  ownerEye.addEventListener("click", (event) => {
    event.preventDefault();
    ownerShortcutStartedAt = Date.now();
    ownerRiddle.classList.add("is-open");
    ownerRiddle.setAttribute("aria-hidden", "false");
    if (ownerRiddleMessage) ownerRiddleMessage.textContent = "Access code required.";
    window.clearTimeout(ownerShortcutTimer);
    ownerShortcutTimer = window.setTimeout(failOwnerShortcut, 5000);
  });
  ownerRiddleForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    failOwnerShortcut();
  });
  ownerTooth.addEventListener("click", (event) => {
    event.preventDefault();
    if (!ownerShortcutStartedAt || Date.now() - ownerShortcutStartedAt > 5000) {
      failOwnerShortcut();
      return;
    }
    window.clearTimeout(ownerShortcutTimer);
    window.location.assign(ownerTooth.href);
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("is-active");
  }
});

const serviceTabs = document.querySelectorAll("[data-service-tab]");
const servicePanels = document.querySelectorAll("[data-service-panel]");

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.getAttribute("data-service-tab");

    serviceTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    servicePanels.forEach((panel) => {
      panel.hidden = panel.getAttribute("data-service-panel") !== selected;
    });
  });
});

const studio21BookingLink = "https://salon.astudio21.com/booking";
const studio21TextNumber = "+19729007147";

// PUBLIC PREVIEW DATA ONLY
// This file is downloaded by every visitor's browser. Do not put private client data here.
// Current live-safe temporary mode: no client profiles here, only a broad booking access gate.
// Never place phone numbers, birthdays, addresses, formulas, notes, pricing, security answers, or private history here.
// Later, your private/admin side should live in a protected backend, Google Sheet + Apps Script, or database API.
const clientProfiles = {
};

function getAccessDestination() {
  return studio21BookingLink;
}

// Private/admin-only data must not be added to this static site file.
// Future private source of truth:
// - client phone numbers
// - custom timing/pricing
// - birthday and anniversary alerts
// - security questions and answers
// - appointment notes
// - check-in auto replies
// - membership/payment status
// RECOVERY IS DISABLED IN STATIC MODE
// Forgot-code recovery needs a private backend or SMS verification.
// Keeping this empty prevents security answers from being exposed in public JavaScript.
const clientRecoveryRecords = [];

const recoveryQuestions = [
  { id: "daughter", label: "What is my daughter's name?" },
  { id: "owner", label: "What is my first name?" },
  { id: "salon", label: "What is the name of my salon?" },
];

function normalizeRecoveryValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ");
}

function isLocalSalonDestination(destination) {
  return destination && destination.startsWith("salon.html?");
}

document.querySelectorAll("#clientPortalForm, [data-client-portal-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = form.querySelector("input[name='clientCode'], #clientCode");
    const message = form.querySelector("[data-portal-message], #portalMessage");

    if (!input) return;

    if (message) {
      message.textContent = "Opening Studio 21 booking...";
    }

    window.location.assign(studio21BookingLink);
  });
});

const bookingWizard = document.querySelector("[data-booking-wizard]");

if (bookingWizard) {
  const greeting = document.querySelector("[data-booking-greeting]");
  const summary = document.querySelector("[data-booking-summary]");
  const progress = document.querySelector("[data-booking-progress]");
  const stepContainer = bookingWizard.querySelector("[data-booking-step]");
  const backButton = document.querySelector("[data-booking-back]");
  const doneButton = document.querySelector("[data-booking-done]");
  const nextButton = document.querySelector("[data-booking-next]");
  const review = document.querySelector("[data-booking-review]");
  const reviewText = document.querySelector("[data-booking-review-text]");
  const requestLink = document.querySelector("[data-booking-request-link]");
  const editButton = document.querySelector("[data-booking-edit]");
  const confirmation = document.querySelector("[data-booking-confirmation]");
  const waitlistLink = document.querySelector("[data-waitlist-link]");
  const showTextLinkButton = document.querySelector("[data-show-text-link]");
  const textMessageLink = document.querySelector("[data-text-message-link]");

  const params = new URLSearchParams(window.location.search);
  const codeFromUrl = params.get("client")?.toUpperCase();
  const savedCode = sessionStorage.getItem("studio21ClientCode")?.toUpperCase();
  const activeCode = clientProfiles[codeFromUrl] ? codeFromUrl : savedCode;
  const activeClient = activeCode ? clientProfiles[activeCode] : null;

  const state = {
    client: activeClient,
    person: "",
    path: activeClient?.gender || "female",
    answers: {},
    stepIndex: 0,
  };

  const bookingSteps = {
    male: [
      {
        id: "person",
        title: "Is this booking service for themselves or someone else?",
        single: true,
        options: ["Myself", "Spouse", "Child", "Family/Friend"],
        allowName: true,
      },
      {
        id: "maleHaircut",
        title: "Do they need a haircut?",
        single: true,
        options: ["Yes", "No", "I'm not sure"],
        minutes: { Yes: 30, No: 0, "I'm not sure": 30 },
      },
      {
        id: "maleColor",
        title: "Do they need color, gray blending, or highlights?",
        type: "checkbox",
        options: ["Gray blending", "1-step color", "Highlights", "No color today", "I'm not sure"],
        minutes: { "Gray blending": 45, "1-step color": 60, Highlights: 90, "No color today": 0, "I'm not sure": 45 },
      },
      {
        id: "malePromotion",
        title: "Would they like to try Crown Dominion thinning therapy?",
        note: "Crown Dominion pairs in-salon scalp care with a full-size Nioxin 3-step system selected for individual hair and scalp needs. First kit includes a complimentary Scalp Dermabrasion with a Crown - Make It a Double purchase.",
        type: "checkbox",
        promotional: true,
        options: ["Crown - Make It a Double", "Scalp Dermabrasion only", "Tell me more", "Skip this for now", "I'm not sure"],
        minutes: { "Crown - Make It a Double": 45, "Scalp Dermabrasion only": 30, "Tell me more": 10, "Skip this for now": 0, "I'm not sure": 10 },
      },
    ],
    female: [
      {
        id: "person",
        title: "Is this booking service for themselves or someone else?",
        single: true,
        options: ["Myself", "Spouse", "Child", "Family/Friend"],
        allowName: true,
      },
      {
        id: "femaleHaircut",
        title: "Do they need a haircut?",
        single: true,
        options: ["Yes", "No", "Bang trim", "I'm not sure"],
        minutes: { Yes: 45, No: 0, "Bang trim": 15, "I'm not sure": 45 },
      },
      {
        id: "femaleStyle",
        title: "Do they like their hair styled?",
        single: true,
        options: ["Yes", "No", "Quick 5 minute dry only", "Curls / flat iron", "I'm not sure"],
        minutes: { Yes: 20, No: 0, "Quick 5 minute dry only": 5, "Curls / flat iron": 30, "I'm not sure": 20 },
      },
      {
        id: "femaleColor",
        title: "Color?",
        single: true,
        options: ["No", "Root touch up only", "All over color", "I'm not sure"],
        minutes: { No: 0, "Root touch up only": 75, "All over color": 90, "I'm not sure": 75 },
      },
      {
        id: "femaleHighlights",
        title: "Highlights?",
        single: true,
        options: ["No", "Partial highlights", "Full highlights", "I'm not sure"],
        minutes: { No: 0, "Partial highlights": 120, "Full highlights": 180, "I'm not sure": 120 },
      },
      {
        id: "femaleTreatmentPromo",
        title: "Would they like to add a PAI System conditioning treatment or try Crown Dominion thinning therapy?",
        note: "Crown Dominion pairs in-salon scalp care with a full-size Nioxin 3-step system selected for individual hair and scalp needs. First kit includes a complimentary Scalp Dermabrasion with a Crown - Make It a Double purchase.",
        type: "checkbox",
        promotional: true,
        options: ["Persephone PAI - restore", "Athena PAI - hydrate", "Inanna PAI - repair", "Partial Pi", "Crown - Make It a Double", "Scalp Dermabrasion only", "Skip this for now", "I'm not sure"],
        minutes: { "Persephone PAI - restore": 45, "Athena PAI - hydrate": 35, "Inanna PAI - repair": 35, "Partial Pi": 25, "Crown - Make It a Double": 45, "Scalp Dermabrasion only": 30, "Skip this for now": 0, "I'm not sure": 20 },
      },
    ],
  };

  function currentSteps() {
    return bookingSteps[state.path] || bookingSteps.female;
  }

  function getSelectedValues(step) {
    const checked = Array.from(stepContainer.querySelectorAll("input[type='checkbox']:checked, input[type='radio']:checked"));
    return checked.map((input) => input.value);
  }

  function saveCurrentStep() {
    const step = currentSteps()[state.stepIndex];
    if (!step) return;

    const values = getSelectedValues(step);
    const nameInput = stepContainer.querySelector("[data-person-name]");

    state.answers[step.id] = values;

    if (step.id === "person") {
      const choice = values[0] || "";
      const extraName = nameInput?.value.trim();
      state.person = choice === "Myself" ? state.client?.name || "client" : [choice, extraName].filter(Boolean).join(": ");
    }
  }

  function estimateMinutes() {
    return currentSteps().reduce((total, step) => {
      const values = state.answers[step.id] || [];
      const stepMinutes = values.reduce((sum, value) => sum + (step.minutes?.[value] || 0), 0);
      return total + stepMinutes;
    }, 0);
  }

  function formatTime(minutes) {
    if (!minutes) return "Anna will confirm the best timing";

    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;

    return `${hours ? `${hours} hr ` : ""}${remainder ? `${remainder} min` : ""}`.trim();
  }

  function selectedServiceGroups() {
    return currentSteps()
      .filter((step) => step.id !== "person")
      .map((step) => {
        const values = (state.answers[step.id] || []).filter(Boolean);
        return {
          title: step.title,
          values,
        };
      })
      .filter((group) => group.values.length);
  }

  function buildRequestSummary() {
    const serviceGroups = selectedServiceGroups();
    const bookingFor = state.person || state.client?.name || "Client";
    const minutes = estimateMinutes();
    const timeText = formatTime(minutes);
    const selections = serviceGroups.length
      ? serviceGroups.map((group) => `${group.title}: ${group.values.join(", ")}`).join("; ")
      : "No specific services selected yet";

    return `Appointment for: ${bookingFor}. Estimated time: ${timeText}. Selections: ${selections}.`;
  }

  function smsLink(body) {
    return `sms:${studio21TextNumber}?&body=${encodeURIComponent(body)}`;
  }

  function renderStep() {
    const steps = currentSteps();
    const step = steps[state.stepIndex];
    const savedValues = state.answers[step.id] || [];
    const isPromotion = step.promotional;

    progress.style.width = `${((state.stepIndex + 1) / steps.length) * 100}%`;
    backButton.disabled = state.stepIndex === 0;
    nextButton.textContent = state.stepIndex === steps.length - 1 ? "Review Request" : "Next";

    stepContainer.innerHTML = `
      <legend>${step.title}</legend>
      ${step.note ? `<p class="booking-step-note">${step.note}</p>` : ""}
      <div class="booking-option-list">
        ${step.options
          .map((option) => {
            const checked = savedValues.includes(option) ? "checked" : "";
            return `
              <label class="booking-option">
                <input type="checkbox" name="${step.id}" value="${option}" ${checked} />
                <span>${option}</span>
              </label>
            `;
          })
          .join("")}
      </div>
      ${
        step.allowName
          ? `<label class="person-name-field">Name, if someone else<input data-person-name type="text" placeholder="Optional name" value="${state.person.includes(":") ? state.person.split(":").slice(1).join(":").trim() : ""}" /></label>`
          : ""
      }
      ${isPromotion ? `<button type="button" class="assistant-skip" data-booking-skip>Skip promotion</button>` : ""}
    `;

    stepContainer.querySelector("[data-booking-skip]")?.addEventListener("click", () => {
      state.answers[step.id] = ["Skip this for now"];
      showReview();
    });

    if (step.single) {
      stepContainer.querySelectorAll(`input[name="${step.id}"]`).forEach((input) => {
        input.addEventListener("change", () => {
          if (!input.checked) return;
          stepContainer.querySelectorAll(`input[name="${step.id}"]`).forEach((otherInput) => {
            if (otherInput !== input) {
              otherInput.checked = false;
            }
          });
        });
      });
    }
  }

  function showReview() {
    saveCurrentStep();

    const minutes = estimateMinutes();
    const timeText = formatTime(minutes);
    const serviceGroups = selectedServiceGroups();
    const bookingFor = state.person || state.client?.name || "Client";
    const membership = state.client?.membership || "Existing Client";

    bookingWizard.hidden = true;
    review.hidden = false;
    confirmation.hidden = true;
    reviewText.innerHTML = `
      <span class="booking-review-line"><strong>Appointment for:</strong> ${bookingFor}</span>
      <span class="booking-review-line"><strong>Client status:</strong> ${membership}</span>
      <span class="booking-review-line"><strong>Estimated appointment time:</strong> ${timeText}</span>
      <span class="booking-review-note">Anna may adjust this if your color, treatment, timing, or finish needs a little more room.</span>
      ${
        serviceGroups.length
          ? `<span class="booking-review-services-title">Selections</span>
            <ul class="booking-review-list">
              ${serviceGroups
                .map((group) => `<li><strong>${group.title}</strong><br />${group.values.join(", ")}</li>`)
                .join("")}
            </ul>`
          : `<span class="booking-review-note">No specific services selected yet. Anna will confirm what is needed.</span>`
      }
    `;
    requestLink.href = state.client?.bookingLink || studio21BookingLink;
    if (waitlistLink) {
      waitlistLink.href = smsLink(`Hi Anna, please add me to the Studio 21 waitlist. ${buildRequestSummary()}`);
    }
    if (textMessageLink) {
      textMessageLink.href = smsLink(`Hi Anna, I need help with my Studio 21 appointment request. ${buildRequestSummary()}`);
      textMessageLink.hidden = true;
    }
  }

  if (activeClient) {
    greeting.textContent = `Hi, ${activeClient.name}.`;
    summary.textContent = "Let's build your appointment request so Anna can reserve the right amount of time.";
    bookingWizard.hidden = false;
    review.hidden = true;
    renderStep();
  }

  nextButton?.addEventListener("click", () => {
    saveCurrentStep();
    if (state.stepIndex >= currentSteps().length - 1) {
      showReview();
      return;
    }
    state.stepIndex += 1;
    renderStep();
  });

  backButton?.addEventListener("click", () => {
    saveCurrentStep();
    state.stepIndex = Math.max(0, state.stepIndex - 1);
    renderStep();
  });

  doneButton?.addEventListener("click", () => {
    showReview();
  });

  editButton?.addEventListener("click", () => {
    review.hidden = true;
    bookingWizard.hidden = false;
    renderStep();
  });

  requestLink?.addEventListener("click", () => {
    confirmation.hidden = false;
  });

  showTextLinkButton?.addEventListener("click", () => {
    if (textMessageLink) {
      textMessageLink.hidden = false;
      textMessageLink.focus();
    }
  });
}

const accessRecoveryForm = document.querySelector("#accessRecoveryForm");

if (accessRecoveryForm) {
  const questionText = document.querySelector("[data-recovery-question]");
  const questionInput = accessRecoveryForm.querySelector("[name='securityQuestion']");
  const confirmation = document.querySelector("#recoveryConfirmation");
  const continueButton = document.querySelector("#continueRecoveredAccess");
  const selectedQuestion = recoveryQuestions[Math.floor(Math.random() * recoveryQuestions.length)];
  let recoveredDestination = "";

  if (questionText && questionInput) {
    questionText.textContent = selectedQuestion.label;
    questionInput.value = selectedQuestion.id;
  }

  accessRecoveryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = normalizeRecoveryValue(accessRecoveryForm.querySelector("[name='firstName']")?.value);
    const lastName = normalizeRecoveryValue(accessRecoveryForm.querySelector("[name='lastName']")?.value);
    const securityQuestion = accessRecoveryForm.querySelector("[name='securityQuestion']")?.value;
    const securityAnswer = normalizeRecoveryValue(accessRecoveryForm.querySelector("[name='securityAnswer']")?.value);
    const message = document.querySelector("#recoveryMessage");

    const record = clientRecoveryRecords.find((client) => {
      const firstMatches = normalizeRecoveryValue(client.firstName) === firstName;
      const lastMatches = normalizeRecoveryValue(client.lastName) === lastName;
      const acceptedAnswers = client.security?.[securityQuestion] || [];
      const answerMatches = acceptedAnswers.some((answer) => normalizeRecoveryValue(answer) === securityAnswer);

      return firstMatches && lastMatches && answerMatches;
    });

    if (!record) {
      if (message) {
        message.textContent = "Automatic recovery is not active yet. Please contact Studio 21 for help with your access code.";
      }
      if (confirmation) {
        confirmation.hidden = true;
      }
      recoveredDestination = "";
      return;
    }

    const destination = getAccessDestination(record.accessCode);

    if (message) {
      message.textContent = "Verified. Please confirm this was you to continue.";
    }

    if (destination) {
      recoveredDestination = destination;
      if (confirmation) {
        confirmation.hidden = false;
      }
    }
  });

  if (continueButton) {
    continueButton.addEventListener("click", () => {
      if (recoveredDestination) {
        window.location.href = recoveredDestination;
      }
    });
  }
}

function showPublicDataWarning(onContinue) {
  const existingWarning = document.querySelector("[data-public-warning-modal]");
  if (existingWarning) {
    existingWarning.remove();
  }

  const warning = document.createElement("div");
  warning.className = "public-warning-modal";
  warning.dataset.publicWarningModal = "true";
  warning.innerHTML = `
    <div class="public-warning-card" role="dialog" aria-modal="true" aria-labelledby="publicWarningTitle">
      <p class="eyebrow">Public Section Warning</p>
      <h2 id="publicWarningTitle">This is not your private client file.</h2>
      <p>You are in a public website section. Anything entered here may be handled by the public site, email, or browser tools instead of your protected client database.</p>
      <p>Do not enter private client information here, including phone numbers, birthdays, addresses, formulas, notes, pricing, security answers, or payment details.</p>
      <div class="public-warning-actions">
        <button type="button" data-public-warning-end>End</button>
        <button type="button" data-public-warning-continue>Continue</button>
      </div>
    </div>
  `;

  const closeWarning = () => warning.remove();

  warning.querySelector("[data-public-warning-end]").addEventListener("click", closeWarning);
  warning.querySelector("[data-public-warning-continue]").addEventListener("click", () => {
    closeWarning();
    onContinue();
  });

  document.body.appendChild(warning);
}

function needsPublicDataWarning(form) {
  return form.hasAttribute("data-public-save-warning") && form.dataset.publicWarningConfirmed !== "true";
}

document.querySelectorAll("[data-mailto-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (needsPublicDataWarning(form)) {
      showPublicDataWarning(() => {
        form.dataset.publicWarningConfirmed = "true";
        form.requestSubmit();
      });
      return;
    }

    form.dataset.publicWarningConfirmed = "false";

    const email = form.dataset.email;
    const subject = form.dataset.subject || "Studio 21 Message";
    const message = form.querySelector("textarea")?.value.trim() || "";
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
});

document.querySelectorAll("[data-public-save-warning]:not([data-mailto-form])").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (needsPublicDataWarning(form)) {
      showPublicDataWarning(() => {
        form.dataset.publicWarningConfirmed = "true";
        form.requestSubmit();
      });
      return;
    }

    form.dataset.publicWarningConfirmed = "false";

    const message = form.querySelector("[data-public-save-message]");
    if (message) {
      message.textContent = "Preview only. This form is not connected to private storage yet.";
    }
  });
});
