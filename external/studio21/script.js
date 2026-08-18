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

const clientPortalForm = document.querySelector("#clientPortalForm");
const clientCodeInput = document.querySelector("#clientCode");
const portalMessage = document.querySelector("#portalMessage");

const clientPortalLinks = {
  "NGU-A": "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVNegKF6XEhkW8fsL0qaCKPKiwTc6lrPA+9bc+rNHn1y1m7JPw3aCiXY9ZpndUIRYZHY5aLzQ3tD/Emowzrjfqc/64IKxnyEPxwwDA59jK2K0dtbOfoYSEELZuDsODh82I302t5XqsR3R1uaf6o7hxCvwoDRqfp7Uxqv/0/wx/88R76XmrgYE58EUZ42ECO38Eo8XGACY+NSEBc6ROUnx0jPqy8jgkWABHUwgiMT7DHu/g/o5/hqPx64WNfefhI97wZoqgUi/LsrQ9ElF+kz6Dl+KC0lxrcbKMyyigoWacOkOodBCJg5mumnvmp9aZ+DDGNScr1BUpTPRJZVt4LSn9OM0aMc6xXWIcW1wvWm62AORmH4j4MES7nKO96NZDRgfF5gm3UAjbDLdAcFn13Y1ZVjeu9nZGdnjqc8TPa/d2sYzGhMpgFcgb3ubFEx/jYIsVv/VYrFJItkUK2DKhqwl3kg=",
  "NGU-A21": "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVNegKF6XEhkW8fsL0qaCKPKiwTc6lrPA+9bc+rNHn1y1m7JPw3aCiXY9ZpndUIRYZHY5aLzQ3tD/Emowzrjfqc/64IKxnyEPxwwDA59jK2K0dtbOfoYSEELZuDsODh82I302t5XqsR3R1uaf6o7hxCvwoDRqfp7Uxqv/0/wx/88R76XmrgYE58EUZ42ECO38Eo8XGACY+NSEBc6ROUnx0jPqy8jgkWABHUwgiMT7DHu/g/o5/hqPx64WNfefhI97wZoqgUi/LsrQ9ElF+kz6Dl+KC0lxrcbKMyyigoWacOkOodBCJg5mumnvmp9aZ+DDGNScr1BUpTPRJZVt4LSn9OM0aMc6xXWIcW1wvWm62AORmH4j4MES7nKO96NZDRgfF5gm3UAjbDLdAcFn13Y1ZVjeu9nZGdnjqc8TPa/d2sYzGhMpgFcgb3ubFEx/jYIsVv/VYrFJItkUK2DKhqwl3kg=",
  TEST21: "salon.html#booking",
  NEW21: "https://docs.google.com/forms/d/e/1FAIpQLSfx-d8XV8dK5MV7Ipuv1ZPb2tjcGKTUJ5n0QCYOgZIVgET7gw/viewform?usp=header",
  VIP21: "https://www.vagaro.com/cl/g0DZI7~ydq9D9PoeHO2L0xx1zh7~fzj81vUZ17IACbQ=",
  CIRCA21: "https://www.vagaro.com/cl/s~FTxq0JJAFO7Rj0~9eRbEY0G4pDn8j1E4PwJv6lxPE=",
};

if (clientPortalForm && clientCodeInput) {
  clientPortalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const code = clientCodeInput.value.trim().toUpperCase();
    const destination = clientPortalLinks[code];

    if (destination) {
      if (portalMessage) {
        portalMessage.textContent = "Opening your Studio 21 link...";
      }

      window.location.href = destination;
      return;
    }

    if (portalMessage) {
      portalMessage.textContent = "That access code was not found.";
    }
  });
}
