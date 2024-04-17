const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulList = document.querySelector("#ingredients");

const createList = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.className = "item";
  list.textContent = ingredient;
  return list;

})
ulList.append(...createList);