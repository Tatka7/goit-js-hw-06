const inputEl = document.querySelector("input");
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

// * ======= Function of random HEX color =======
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createEl.addEventListener('click', function() {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);
  createBoxes(amount);
});

// * ======= Function of random Box create =======
function createBoxes(amount) {
  const boxSize = 30;
  let html = '';
  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxesEl.innerHTML = html;
}

destroyEl.addEventListener('click', destroyBoxes);

// * ======= Function of random Box destroy =======
function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = "";
}
