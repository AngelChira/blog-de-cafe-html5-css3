const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll(".campo__input");
const textarea = document.querySelector(".campo__field--textarea");
const spansError = document.querySelectorAll(".formulario__error");
const text = document.querySelector(".campo__text");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValid = true;
  let textareaValid = true;

  spansError.forEach(function (span) {
    span.classList.add("none");
  });

  inputs.forEach((input, index) => {
    if (!input.checkVisibility() || input.value.trim() === "") {
      spansError[index].classList.remove("none");
      inputValid = false;
    }
  });

  if (!textarea.checkVisibility || textarea.value.trim() === "") {
    spansError[2].classList.remove("none");
    textareaValid = false;
  }

  if (inputValid && textareaValid) {
    text.textContent = "¡Formulario enviado correctamente!";
    text.classList.remove("none", "red");
    formulario.reset();
  } else {
    text.textContent = "¡Faltan completar campos!";
    text.classList.remove("none");
    text.classList.add("red");
  }

  setTimeout(() => {
    text.classList.add("none");
  }, 4000);
});
