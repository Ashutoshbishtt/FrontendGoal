const counter = document.getElementById("counter");
const inputNumber = document.getElementById("inputNumber");
const positiveButton = document.getElementById("positive");
const negativeButton = document.getElementById("negative");
const resetButton = document.getElementById("resetButton");

// console.log(inputNumber.value);
console.log(counter.innerText);

let incrementBy = Number(inputNumber.value);

inputNumber.addEventListener("input", (e) => {
  if (inputNumber.value < 0) {
    incrementBy = 0;
    inputNumber.value = 0;
    incrementBy = 0;
    alert("please enter the value greater than 0");
    return;
  }
  incrementBy = Number(inputNumber.value);
});

positiveButton.addEventListener("click", (e) => {
  let val = Number(counter.innerText);
  let newVal = val + incrementBy;
  counter.innerText = newVal;
  console.log(newVal);
});

negativeButton.addEventListener("click", (e) => {
  let val = Number(counter.innerText);
  let newVal = val - incrementBy;
  if (newVal < 0) {
    counter.innerText = 0;
    alert("Value cannot be less than 0");
    return;
  }
  counter.innerText = newVal;
  console.log(newVal);
});

resetButton.addEventListener("click", (e) => {
  inputNumber.value = 0;
  counter.innerText = 0;
});
