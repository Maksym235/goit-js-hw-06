const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(elem) {
  const inputValue = elem.currentTarget;
  if (input.value.length === Number(inputValue.dataset.length)) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.add("invalid");
  }
}
