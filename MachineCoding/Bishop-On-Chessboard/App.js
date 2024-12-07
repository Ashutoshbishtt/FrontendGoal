const chessBoard = document.getElementById("chessBoard");

function createChessboard() {
  for (let i = 0; i < 8; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < 8; j++) {
      const newCol = document.createElement("div");
      newCol.classList.add("col");
      newCol.classList.add((i + j) % 2 === 0 ? "black-color" : "white-color");

      newCol.dataset.row = i;
      newCol.dataset.col = j;

      newRow.appendChild(newCol);
    }
    chessBoard.appendChild(newRow);
  }
}

function placeTheBishop(row = 4, col = 4) {
  let rowForRightDown = row;
  let colForRightDown = col;

  let rowForLeftTop = row;
  let colForLeftTop = col;

  let rowForRightTop = row;
  let colForRightTop = col;

  let rowForLeftDown = row;
  let colForLeftDown = col;

  const box = document.getElementsByClassName("col");

  while (rowForRightDown <= 7 && colForRightDown <= 7) {
    const square = document.querySelector(
      `[data-row="${rowForRightDown}"][data-col="${colForRightDown}"]`
    );
    if (square) {
      square.classList.add("blue-color");
    }
    rowForRightDown++;
    colForRightDown++;
  }

  while (rowForLeftTop >= 0 && colForLeftTop >= 0) {
    const square = document.querySelector(
      `[data-row="${rowForLeftTop}"][data-col="${colForLeftTop}"]`
    );
    if (square) {
      square.classList.add("blue-color");
    }
    rowForLeftTop--;
    colForLeftTop--;
  }

  while (rowForLeftDown <= 7 && colForLeftDown >= 0) {
    const square = document.querySelector(
      `[data-row="${rowForLeftDown}"][data-col="${colForLeftDown}"]`
    );
    if (square) {
      square.classList.add("blue-color");
    }
    rowForLeftDown++;
    colForLeftDown--;
  }

  while (rowForRightTop >= 0 && colForRightTop <= 7) {
    const square = document.querySelector(
      `[data-row="${rowForRightTop}"][data-col="${colForRightTop}"]`
    );
    if (square) {
      square.classList.add("blue-color");
    }
    rowForRightTop--;
    colForRightTop++;
  }
}

function clearChessBoard() {
  document.querySelectorAll(".blue-color").forEach((el) => {
    el.classList.remove("blue-color");
  });
}

chessBoard.addEventListener("mouseover", (e) => {
  clearChessBoard();
  if (e.target.classList.contains("col")) {
    let row = parseInt(e.target.dataset.row);
    let col = parseInt(e.target.dataset.col);
    console.log(row, col);
    placeTheBishop(row, col);
  }
});

chessBoard.addEventListener("click", (e) => {
  clearChessBoard();
  if (e.target.classList.contains("col")) {
    let row = parseInt(e.target.dataset.row);
    let col = parseInt(e.target.dataset.col);
    console.log(row, col);
    placeTheBishop(row, col);
  }
});

createChessboard();
