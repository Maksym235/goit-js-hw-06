const refs = {
  input: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputRange);

function onInputRange(evn) {
  refs.spanText.style.fontSize = `${evn.target.value}px`;
}
