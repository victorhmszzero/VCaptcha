document.addEventListener("DOMContentLoaded", function () {
  new ClipboardJS(".footer__btn--email");
});
const emailElement = document.getElementById("footerTooltip");

let canShowTooltip = true;

const checkEmail = document.getElementById("checkEmail");
checkEmail.addEventListener("click", copyEmail);

function copyEmail() {
  if (canShowTooltip) {
    canShowTooltip = false;
    emailElement.classList.add("footer__tooltip-item--activate");

    setTimeout(function () {
      emailElement.classList.remove("footer__tooltip-item--activate");
      canShowTooltip = true;
    }, 1200); // Esconder o tooltip após 2 segundos
  }
}
