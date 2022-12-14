function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  spanText: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanText.textContent = color;
}
