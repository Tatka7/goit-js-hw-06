const inputValueEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputValueEl.addEventListener("input", onTextSizeChange);

function onTextSizeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
