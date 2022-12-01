const decrement = document.querySelector('button[data-action="decrement"]');
console.log(decrement.dataset.action);

const increment = document.querySelector('button[data-action="increment"]');
console.log(increment.dataset.action);

const value = document.querySelector("#value");
let counterValue = 0;
const dec = function () {
  counterValue -= 1;
  value.textContent = counterValue;
};

const inc = function () {
  counterValue += 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", dec);

increment.addEventListener("click", inc);
