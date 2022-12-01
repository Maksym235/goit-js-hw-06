const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listElements = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.classList.add("item");
  listElement.textContent = ingredient;

  return listElement;
});

list.append(...listElements);

console.log(list);

// const li1 = document.createElement("li");
// li1.classList.add("item");
// li1.textContent = ingredients[0];
// const li2 = document.createElement("li");
// li2.classList.add("item");
// li2.textContent = ingredients[1];
// const li3 = document.createElement("li");
// li3.classList.add("item");
// li3.textContent = ingredients[2];
// const li4 = document.createElement("li");
// li4.classList.add("item");
// li4.textContent = ingredients[3];
// const li5 = document.createElement("li");
// li5.classList.add("item");
// li5.textContent = ingredients[4];
// const li6 = document.createElement("li");
// li6.classList.add("item");
// li6.textContent = ingredients[5];
// list.append(li1, li2, li3, li4, li5, li6);
// console.log(list);
