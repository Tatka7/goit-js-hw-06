const inputValueEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputValueEl.addEventListener("input", () => {
  const fontSize = inputValueEl.value + 'px';
  textEl.style.fontSize = fontSize;
});
// Синхронізація розміру тексту з положенням повзунка
const initialFontSize = inputValueEl.value + 'px';
textEl.style.fontSize = initialFontSize;
