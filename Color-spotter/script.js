const defaultRows = 4;
const defaultCols = 4;
let rows = defaultRows;
let cols = defaultCols;

let score = 0;
let color = getRandomColor();
let randomX = 0;
let randomY = 0;

let grid = document.getElementById("grid");

let scoreElement = document.getElementById("score");
scoreElement.textContent = `Score - ${score}`;

function gameStart(row, col) {
  color = getRandomColor();
  [randomX, randomY] = getRandomGrid(row);
  formGrid(row, col);
  rows = row;
  cols = col;
}

function getRandomGrid(row, col) {
  let min = 1;
  let max = row;
  let x = Math.floor(Math.random() * max + min);
  let y = Math.floor(Math.random() * max + min);
  return [x, y];
}

function getRandomColor() {
  let values = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += values.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}

function formGrid(rows, cols) {
  for (let i = 1; i <= rows; i++) {
    let row = document.createElement("div");
    row.id = "row-" + i;
    row.classList.add("row");
    for (let j = 1; j <= cols; j++) {
      let col = document.createElement("div");
      col.id = `cell_${i}-${j}`;
      col.dataset.row = i;
      col.dataset.col = j;
      col.classList.add("cell");

      col.style.backgroundColor = color;
      if (i == randomX && j == randomY) {
        col.classList.add("special");
      }
      row.append(col);
    }
    grid.append(row);
  }
}

function clickHandler(e) {
  let row = parseInt(e.target.dataset.row);
  let col = parseInt(e.target.dataset.col);
  grid.innerHTML = "";
  if (row == randomX && col == randomY) {
    score += 1;
    gameStart(rows + 1, cols + 1);
  } else {
    score = 0;
    grid.style.border = "2px solid red";
    let errorElement = document.getElementById("warning");
    errorElement.innerText = "oops!! your game progress has lost";
    setTimeout(() => {
      grid.style.border = "";
      errorElement.innerText = "";
    }, 2000);
    gameStart(defaultRows, defaultCols);
  }
  scoreElement.textContent = `Score - ${score}`;
}

grid.addEventListener("click", (e) => clickHandler(e));

gameStart(rows, cols);
