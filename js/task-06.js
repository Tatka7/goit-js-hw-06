
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  inputEl.className = "valid";
  if (
    event.currentTarget.value.trim().length !== Number(inputEl.dataset.length)
  ) {
    inputEl.className = "invalid";
  }
}