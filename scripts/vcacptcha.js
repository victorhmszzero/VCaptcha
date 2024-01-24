(function () {
  // IDs geral components
  const blockForm = document.getElementById("contactform");
  //
  const blockOverlay = document.getElementById("overlay");
  const btnCloseOverlay = document.getElementById("btnCloseOverlay");
  // IDs before open captcha
  const VcaptchaLabel = document.getElementById("VcaptchaLabel");
  const VcaptchaIcon = document.getElementById("VcaptchaIcon");
  const VCaptchaNullFiled = document.getElementById("VcaptchaNullFiled");
  // IDs after open captcha
  const VcaptchaOverlay = document.getElementById("VcaptchaOverlay");
  const VcaptchaContainer = document.getElementById("VcaptchaCaptcha");
  const VcaptchaInput = document.getElementById("VcaptchaInput");
  const VcaptchaSubmit = document.getElementById("VcaptchaSubmit");
  const VcaptchaRefresh = document.getElementById("VcaptchaRefresh");

  // Classes
  const overlayOpenClass = "v-captcha__v-overlay--open";
  const iconSquareClass = "v-captcha__icon--square";
  const iconCircleClass = "v-captcha__icon--circle";
  const iconCheckClass = "v-captcha__icon--check";

  let a = [];
  let c = false;
  // Exibir o overlay do captcha
  function showCaptchaOverlay() {
    if (!c) {
      VcaptchaOverlay.classList.add(overlayOpenClass);
      checkboxIcon(2);
      const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  }
  function checkboxIcon(value) {
    VcaptchaIcon.classList.remove(iconSquareClass);
    VcaptchaIcon.classList.remove(iconCircleClass);
    VcaptchaIcon.classList.remove(iconCheckClass);

    switch (value) {
      case 1:
        VcaptchaIcon.classList.add(iconSquareClass);
        break;
      case 2:
        VcaptchaIcon.classList.add(iconCircleClass);
        break;
      case 3:
        VcaptchaIcon.classList.add(iconCheckClass);
        break;
    }
  }

  // Gerar um código captcha aleatório
  function generateRandomCaptcha(lengthOfCode, possible) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  // Gerar e exibir um novo captcha
  function generateCaptcha() {
    VcaptchaInput.value = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 1;

    a = Array.from({ length: 5 }, () => generateRandomCaptcha(lengthOfCode, possible));
    displayCaptcha();
  }

  // Exibir o captcha na interface
  function displayCaptcha() {
    VcaptchaContainer.innerHTML = a.map((char) => `<b>${char}</b>`).join("");
  }

  // Resetar o formulário e fechar o overlay
  function resetFormAndCloseOverlay() {
    checkboxIcon(1);
    blockOverlay.style.display = "none";
    blockForm.reset();
  }

  // Quando pressionar a tecla Enter dentro do Captcha
  function handleKeyEnter(event) {
    if (event.key === "Enter") {
      validateCaptcha();
    }
  }

  // Validar o captcha inserido
  function validateCaptcha() {
    let VcaptchaInputUppercase = VcaptchaInput.value.toUpperCase();
    if (VcaptchaInputUppercase === a.join("")) {
      VcaptchaOverlay.classList.remove(overlayOpenClass);
      c = true;
      checkboxIcon(3);
      VCaptchaNullFiled.value = "Unlock";
      VcaptchaIcon.classList.remove(iconCircleClass);
    } else {
      generateCaptcha();
    }
  }

  // Event listeners
  blockForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (VCaptchaNullFiled.value !== "Unlock") {
      VCaptchaNullFiled.value = "";
    } else {
      if (c) {
        c = false;
        blockOverlay.style.display = "flex";
        generateCaptcha();
      }
    }
  });

  VcaptchaLabel.addEventListener("click", showCaptchaOverlay);
  VcaptchaSubmit.addEventListener("click", validateCaptcha);
  VcaptchaRefresh.addEventListener("click", generateCaptcha);
  blockOverlay.addEventListener("keydown", handleKeyEnter);
  btnCloseOverlay.addEventListener("click", resetFormAndCloseOverlay);

  // Inicialização
  generateCaptcha();
  resetFormAndCloseOverlay();
})();
