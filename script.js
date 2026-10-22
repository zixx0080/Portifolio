const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const navigationLinks = document.querySelectorAll("#navigationLinks .nav-link");
const navigationMenu = document.querySelector("#navigationLinks");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navigationMenu?.classList.contains("show") && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(navigationMenu).hide();
    }
  });
});
