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
