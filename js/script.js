document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.getElementById("navbarSupportedContent");

    toggler.addEventListener("click", function () {
        menu.classList.toggle("show");

        const expanded = toggler.getAttribute("aria-expanded") === "true";
        toggler.setAttribute("aria-expanded", !expanded);
    });
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && !localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
        cookieBanner.style.display = "flex";
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            if (cookieBanner) cookieBanner.style.display = "none";
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener("click", function () {
            localStorage.setItem("cookiesDeclined", "true");
            if (cookieBanner) cookieBanner.style.display = "none";
        });
    }
});

