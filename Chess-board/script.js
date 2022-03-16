const ROWS = 8;
const COLS = 8;

let grid = document.getElementById("grid");
grid.addEventListener("click", (e) => onClickHandler(e));

function getGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.id = "row-" + (i + 1);
    row.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("div");
      col.id = `cell_${i + 1}-${j + 1}`;
      col.dataset.row = i + 1;
      col.dataset.column = j + 1;
      col.classList.add("col");
      if ((i + j) & 1) {
        col.classList.add("dark");
      }
      row.append(col);
    }
    grid.append(row);
  }
}

getGrid(ROWS, COLS);

function onClickHandler(e) {
  let row = parseInt(e.target.dataset.row);
  let col = parseInt(e.target.dataset.column);
  console.log(row, col);
  removepaint();
  paintDiagonal(row, col);
}

function paintDiagonal(row, col) {
  if (row < 1 || row > ROWS || col < 1 || col > COLS) {
    return;
  }

  for (let i = 1; i <= ROWS; i++) {
    for (let j = 1; j <= COLS; j++) {
      //highlighting the diagonal squares
      if (i + j === row + col || i - j === row - col) {
        let cell = document.getElementById(`cell_${i}-${j}`);
        cell.classList.add("highlight");
      }
    }
  }
}

function removepaint() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let cell = document.getElementById(`cell_${i + 1}-${j + 1}`);
      cell.classList.remove("highlight");
    }
  }
}
