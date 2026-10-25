const anoAtual = document.querySelector("#currentYear");

if (anoAtual) {
  anoAtual.textContent = String(new Date().getFullYear());
}

const linksNavegacao = document.querySelectorAll("#navigationLinks .nav-link");
const menuNavegacao = document.querySelector("#navigationLinks");

linksNavegacao.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuNavegacao?.classList.contains("show") && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(menuNavegacao).hide();
    }
  });
});
