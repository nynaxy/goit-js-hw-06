function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changingColor = document.querySelector("button.change-color");
const changingSpan = document.querySelector("span.color");

changingColor.addEventListener("click", () => {
  let colorValue = getRandomHexColor()
  changingSpan.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
})