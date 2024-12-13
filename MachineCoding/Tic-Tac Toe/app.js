const wrapper = document.getElementById("wrapper");
let allCol = null;
let chance = 1;
let gameOver = false; // Add a game-over flag to prevent further moves

const restButton = document.getElementById("resetButton");
restButton.addEventListener("click", (e) => {
  allCol.forEach((el) => {
    el.innerText = "";
    chance = 1;
    gameOver = false;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 3; j++) {
      let col = document.createElement("div");
      col.setAttribute("class", "col");
      col.setAttribute("data-row", i);
      col.setAttribute("data-col", j);
      col.addEventListener("click", colClick);
      row.appendChild(col);
    }
    wrapper.appendChild(row);
  }
  allCol = document.querySelectorAll(".col");
});

function colClick() {
  if (gameOver || this.innerText !== "") {
    return; // Stop the click if the game is over or the cell is already filled
  }
  fillAndCheck(this);
}

function fillAndCheck(el) {
  let row = el.dataset.row;
  let col = el.dataset.col;

  // Set the value of the current cell based on the chance
  if (chance % 2 === 0) {
    el.innerText = "0";
  } else {
    el.innerText = "1";
  }

  const curText = el.innerText;

  // Check for win condition after the move
  if (checkWin(row, col, curText)) {
    alert(`${curText} wins!`);
    gameOver = true; // End the game once a player wins
  } else {
    chance++;
  }
}

function checkWin(row, col, curText) {
  // Check horizontally (right)
  if (
    checkDirection(row, col, 0, 1, curText) +
      checkDirection(row, col, 0, -1, curText) >=
    2
  ) {
    return true;
  }
  // Check vertically (down)
  if (
    checkDirection(row, col, 1, 0, curText) +
      checkDirection(row, col, -1, 0, curText) >=
    2
  ) {
    return true;
  }
  // Check diagonal (right top)
  if (
    checkDirection(row, col, -1, 1, curText) +
      checkDirection(row, col, 1, -1, curText) >=
    2
  ) {
    return true;
  }
  // Check diagonal (left top)
  if (
    checkDirection(row, col, -1, -1, curText) +
      checkDirection(row, col, 1, 1, curText) >=
    2
  ) {
    return true;
  }
  return false;
}

function checkDirection(row, col, rowOffset, colOffset, curText) {
  let count = 0;
  let r = Number(row) + rowOffset;
  let c = Number(col) + colOffset;

  while (r >= 0 && r < 3 && c >= 0 && c < 3) {
    const curEl = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
    if (curEl.innerText !== curText) {
      break;
    }
    count++;
    r += rowOffset;
    c += colOffset;
  }
  return count;
}
