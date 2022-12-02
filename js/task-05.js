// 1. отримати доступ до інпут і спан
// 2. прописати колбек для спана
// 3. повісти слухача на інтуп
// 4. прирівняти спан до велью інпута

const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);

function onInputChange() {
  refs.nameLabel.textContent = refs.input.value;
  if (!refs.nameLabel.textContent) {
    refs.nameLabel.textContent = "Anonymous";
  }
}
