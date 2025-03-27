const bodyEl = document.querySelector("body");
const colorArea = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", getRandomHexColor)
function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    bodyEl.style.backgroundColor = randomColor;
    colorArea.innerHTML = randomColor;
}
