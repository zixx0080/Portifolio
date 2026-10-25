// Atualiza automaticamente o ano exibido no rodapé.
const anoAtual = document.querySelector("#currentYear");

if (anoAtual) {
  anoAtual.textContent = String(new Date().getFullYear());
}

// No celular, fecha o menu depois que a pessoa escolhe uma seção.
const linksNavegacao = document.querySelectorAll("#navigationLinks .nav-link");
const menuNavegacao = document.querySelector("#navigationLinks");

linksNavegacao.forEach((link) => {
  link.addEventListener("click", () => {
    // O menu recolhido só precisa ser fechado quando o Bootstrap está disponível.
    if (menuNavegacao?.classList.contains("show") && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(menuNavegacao).hide();
    }
  });
});
