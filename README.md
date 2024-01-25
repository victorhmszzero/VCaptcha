# Vcaptcha
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)

## Implementação

### 🟠 HTML 

1. Atribua o `id` **contactForm** para o seu `<form>`. Como no exemplo abaixo:

    ```html
    <form id="contactForm">
    ```
  > [!TIP]
  > Se você já tiver um ID predefinido para seu formulário, siga as instruções abaixo.

  ```javascript
  // No arquivo vcacpcha.js, atualize a constante blockForm com o ID do seu formulário:
  const blockForm = document.getElementById("SEU-ID-DO-FORMULARIO");
  ```

---

2. Adicione o seguinte código dentro do seu `<form>`:

    ```html
    <section class="v-captcha">
      <!-- Botão para mostrar o v-overlay -->
      <label class="v-captcha__label" id="VcaptchaLabel" type="button">
        <span class="v-captcha__icon v-captcha__icon--square" id="VcaptchaIcon">
          <i class="material-icons">check</i>
        </span>
        <span class="v-captcha__text">Não sou um robô</span>
      </label>
      <input class="v-captcha__input" id="VcaptchaNullFiled" placeholder="Null" type="text" required />
      <!-- Conteúdo do v-overlay -->
      <div class="v-captcha__v-overlay" id="VcaptchaOverlay">
        <section class="v-overlay__content">
          <span class="v-overlay__captcha" id="VcaptchaCaptcha"></span>
          <label class="v-overlay__label" for="VcaptchaInput">Escreva o texto acima:</label>
          <div class="v-overlay__sub-content">
            <input class="v-overlay__input" id="VcaptchaInput" type="text" maxlength="5" tabindex="-1" />
            <button class="v-overlay__btn v-overlay__btn--restart" id="VcaptchaRefresh" type="button" tabindex="-1">
              <i class="material-icons">restart_alt</i>
            </button>
          </div>
          <button class="v-overlay__btn v-overlay__btn--dark" id="VcaptchaSubmit" type="button" tabindex="-1">Validar</button>
        </section>
      </div>
    </section>
    ```

---

3. Adicione a tag `<button>` e atribua o `type` **submit** no final do `<form>`, caso ainda não tenha:

    ```html
    <button type="submit">YOUR TEXT</button>
    ```

---

4. Adicione as tags `<link/>` em sua `<head>`:

    ```html
    <link rel="stylesheet" href="vcacptcha-styles.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    ```

---

5. Adicione a tag `<script>` no final do seu `<body>`:

    ```html
    <script src="vcacptcha.js"></script>
    ```

---

### 🔵 CSS

Crie um arquivo chamado `vcacptcha-styles.css"` na pasta raiz do seu projeto e insira o código:

``` css
.v-captcha {
  /* Main
  ========================*/
  --background-color: #fff;
  --label-border: #c9c9c9;
  --overlay-border: #dadada;
  /* Label icon/button
  ========================*/
  --icon-color: white;
  --square-color-hover: #f1f1f1;
  --square-border-hover: #505050;
  --circle-color: #3399ff;
  --circle-border: #f3f3f3;
  --check-background: black;
  /* Input 
  ========================*/
  --input-color: #495057;
  --input-border: #ced4da;
  /* Restart button
  ========================*/
  --restart-color: #495057;
  --restart-background: #e9ecef;
  --restart-background-hover: #dfe4e9;
  /* Validate button
  ========================*/
  --btn-color: #fff;
  --btn-border: #1f1b18;
  --btn-background: #27221d;
  --btn-background-hover: #1b1815;
}
.v-captcha__label {
  display: flex;
  align-items: center;
  margin: 20px 0px;
  padding: 20px 5px;
  padding: 20px;
  border: 1px solid var(--label-border);
  border-radius: 5px;
  background-color: var(--background-color);
  width: max-content;
  font-size: 13px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.v-captcha__icon {
  position: relative;
  padding: 10px;
}
.v-captcha__icon .material-icons {
  position: absolute;
  top: 0px;
  left: 0;
  opacity: 0;
  color: var(--icon-color);
  font-size: 20px;
}
.v-captcha__icon--square,
.v-captcha__icon--check {
  margin-right: 12px;
  border: 1px solid var(--check-background);
  border-radius: 2px;
}
.v-captcha__icon--check {
  background-color: var(--check-background);
}
.v-captcha__icon--check .material-icons {
  opacity: 1;
}
.v-captcha__icon--circle {
  margin-right: 10px;
  border: 4px solid var(--circle-border);
  border-top: 4px solid var(--circle-color);
  border-radius: 50%;
  background-color: none;
  transition: border 250ms;
  transition: margin-right 250ms;
  animation: spin 1s linear infinite;
}
.v-captcha__label:hover .v-captcha__icon--square {
  border: 1px solid var(--square-border-hover);
  background-color: var(--square-color-hover);
}
.v-captcha__label:hover .v-captcha__icon--circle {
  border: 4px solid var(--circle-border);
  border-top: 4px solid var(--circle-color);
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.v-captcha__text {
  font-family: Roboto, helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}
.v-captcha__input {
  position: absolute;
  opacity: 0;
  height: 0;
}
.v-captcha__v-overlay {
  position: relative;
  background-color: var(--background-color);
  max-width: 400px;
  height: 0;
  overflow-y: hidden;
}
.v-captcha__v-overlay:before {
  position: absolute;
  top: -23px;
  left: 7%;
  margin-top: -8px;
  border: 15px solid transparent;
  border-bottom: 15px solid var(--overlay-border);
  content: "";
}
.v-captcha__v-overlay:after {
  position: absolute;
  top: -18px;
  left: 7%;
  margin-top: -12px;
  border: 15px solid transparent;
  border-bottom: 15px solid var(--background-color);
  content: "";
}
.v-captcha__v-overlay--open {
  padding: 20px;
  border: 1px solid var(--overlay-border);
  border-radius: 5px;
  height: max-content;
  overflow-y: visible;
}
.v-captcha .v-overlay__captcha {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0px auto;
  width: 80%;
  height: 100px;
  font-family: arial;
  font-weight: 900;
}
.v-captcha .v-overlay__captcha b {
  font-size: 24px;
}
.v-captcha .v-overlay__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 0px auto;
  width: 80%;
}
.v-captcha .v-overlay__sub-content {
  display: flex;
  justify-content: center;
  height: calc(1.5em + 0.75rem + 2px);
}
.v-captcha .v-overlay__input {
  padding-left: 5px;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;
  height: calc(1.5em + 0.75rem + 2px);
  color: var(--input-color);
  font-size: 1rem;
  font-weight: 400;
}
.v-captcha .v-overlay__input:focus {
  outline: 0;
  border-color: var(--input-border);
  background-color: var(--background-color);
  color: var(--input-color);
}
.v-captcha .v-overlay__btn {
  padding: 0.375rem 0.75rem;
  height: 105%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  transition: background-color 0.15s ease-in-out, border 0.15s ease-in-out;
  cursor: pointer;
  text-align: center;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.v-captcha .v-overlay__btn--restart {
  margin-left: -4px;
  border: 1px solid var(--input-border);
  background-color: var(--restart-background);
  color: var(--restart-color);
}
.v-captcha .v-overlay__btn--dark {
  margin-top: 5px;
  background-color: var(--btn-background);
  width: 45%;
  color: var(--btn-color);
}
.v-captcha .v-overlay__btn--restart:hover {
  background-color: var(--restart-background-hover);
}
.v-captcha .v-overlay__btn--dark:hover,
.v-captcha .v-overlay__btn--dark:focus {
  border-color: var(--btn-border);
  background-color: var(--btn-background-hover);
}
```

### 🟡 JS

Crie um arquivo chamado `vcacptcha.js"` na pasta raiz do seu projeto e insira o codigo:

```javascript
(function () {
  // IDs Form
  const blockForm = document.getElementById("contactform");
  //
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

  // Resetar o formulário
  function resetForm() {
    checkboxIcon(1);
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
        generateCaptcha();
        resetForm();
      }
    }
  });

  VcaptchaLabel.addEventListener("click", showCaptchaOverlay);
  VcaptchaSubmit.addEventListener("click", validateCaptcha);
  VcaptchaRefresh.addEventListener("click", generateCaptcha);

  // Inicialização
  generateCaptcha();
  resetForm();
})();
```
