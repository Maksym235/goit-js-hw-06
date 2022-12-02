// 1 отримати посилання на інпут
// 2 повісити слухача блюр на інтут
// 3 додати перевірку велью інпута мін 6 символів
// 4 стилізувати бордер

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (input.value.length >= 6) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.add("invalid");
  }
  //   input.value.length >= 6
  //     ? input.classList.add("valid")
  //     : input.classList.add("invalid");
}
