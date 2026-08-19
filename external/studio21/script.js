const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("is-open");
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("is-active");
  }
});

const existingClientBookingLink =
  "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVNegKF6XEhkW8fsL0qaCKPKiwTc6lrPA+9bc+rNHn1y1m7JPw3aCiXY9ZpndUIRYZHY5aLzQ3tD/Emowzrjfqc/64IKxnyEPxwwDA59jK2K0dtbOfoYSEELZuDsODh82I302t5XqsR3R1uaf6o7hxCvwoDRqfp7Uxqv/0/wx/88R76XmrgYE58EUZ42ECO38Eo8XGACY+NSEBc6ROUnx0jPqy8jgkWABHUwgiMT7DHu/g/o5/hqPx64WNfefhI97wZoqgUi/LsrQ9ElF+kz6Dl+KC0lxrcbKMyyigoWacOkOodBCJg5mumnvmp9aZ+DDGNScr1BUpTPRJZVt4LSn9OM0aMc6xXWIcW1wvWm62AORmH4j4MES7nKO96NZDRgfF5gm3UAjbDLdAcFn13Y1ZVjeu9nZGdnjqc8TPa/d2sYzGhMpgFcgb3ubFEx/jYIsVv/VYrFJItkUK2DKhqwl3kg=";

const clientPortalLinks = {
  "NGU-A": existingClientBookingLink,
  "NGU-A21": existingClientBookingLink,
  "MIL-C": existingClientBookingLink,
  TEST21: "salon.html#booking",
  NEW21: "https://docs.google.com/forms/d/e/1FAIpQLSfx-d8XV8dK5MV7Ipuv1ZPb2tjcGKTUJ5n0QCYOgZIVgET7gw/viewform?usp=header",
  VIP21: "https://www.vagaro.com/cl/g0DZI7~ydq9D9PoeHO2L0xx1zh7~fzj81vUZ17IACbQ=",
  CIRCA21: "https://www.vagaro.com/cl/s~FTxq0JJAFO7Rj0~9eRbEY0G4pDn8j1E4PwJv6lxPE=",
};

document.querySelectorAll("#clientPortalForm, [data-client-portal-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = form.querySelector("input[name='clientCode'], #clientCode");
    const message = form.querySelector("[data-portal-message], #portalMessage");

    if (!input) return;

    const code = input.value.trim().toUpperCase();
    const destination = clientPortalLinks[code];

    if (destination) {
      if (message) {
        message.textContent = "Opening your Studio 21 link...";
      }

      window.location.href = destination;
      return;
    }

    if (message) {
      message.textContent = "That access code was not found.";
    }
  });
});

document.querySelectorAll("[data-mailto-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.dataset.email;
    const subject = form.dataset.subject || "Studio 21 Message";
    const message = form.querySelector("textarea")?.value.trim() || "";
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
});
