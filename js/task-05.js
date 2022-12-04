const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);

function onInputChange() {
  refs.nameLabel.textContent = refs.input.value.trim();
  if (!refs.nameLabel.textContent) {
    refs.nameLabel.textContent = "Anonymous";
  }
}
