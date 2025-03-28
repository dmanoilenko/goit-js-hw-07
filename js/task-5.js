const bodyEl = document.querySelector("body");
const colorArea = document.querySelector(".color");
const button = document.querySelector(".change-color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handleClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorArea.innerHTML = randomColor;
  console.log(randomColor);
}
button.addEventListener("click", handleClick);


