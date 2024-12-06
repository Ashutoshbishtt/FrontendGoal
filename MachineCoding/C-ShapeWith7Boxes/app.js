var container = document.getElementById("container");
var box = document.querySelectorAll(".box");
let queue = [];
let isProcessing = false;

container.addEventListener("click", function (e) {
  if (isProcessing) return;
  let index = e.target.dataset.index;
  console.log(index);
  if (index != undefined && !box[index].classList.contains("green-color")) {
    queue.push(index);
    box[index].classList.add("green-color");
  }
  if (queue.length == box.length) {
    isProcessing = true;
    let count = 0;
    while (queue.length > 0) {
      let idx = queue.shift();
      count++;
      (function (count) {
        setTimeout(function () {
          box[idx].classList.remove("green-color");
          if (count == box.length) isProcessing = false;
        }, count * 1000);
      })(count);
    }
  }
});
