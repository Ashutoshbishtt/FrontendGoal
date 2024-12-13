const inputBox = document.getElementById("wrapper");
console.log(inputBox);

inputBox.addEventListener("input", function (e) {
  const val = e.target;
  let curInputBox = e.target.dataset.inid;
  console.log(curInputBox);
  let curVal = e.target.value;
  console.log(curVal);

  if (isNaN(curVal)) {
    e.target.value = "";
    return;
  }

  if (e.inputType === "deleteContentBackward") return;

  const next = e.target.nextElementSibling;
  if (next) {
    next.focus();
  }
});

inputBox.addEventListener("keyup", (e) => {
  let pressedKey = e.key;
  let key = pressedKey.toLowerCase();
  if (key === "backspace" || key === "delete") {
    e.target.value = "";
    const prev = e.target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
  }
});
