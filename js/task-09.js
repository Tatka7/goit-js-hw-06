const buttonEl = document.querySelector(".change-color");
const currentColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  bodyEl.style.background = getRandomHexColor();
  currentColorEl.textContent = bodyEl.style.background;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



