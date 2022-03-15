/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */
function PixelArt(el, rows, cols) {
  // write logic to create pixel art grid.
  let parent = document.querySelector(el);
  for (let i = 0; i < rows; i++) {
    let node = document.createElement(null);
    node.className = "rows";
    for (let j = 0; j < cols; j++) {
      let element = document.createElement("div");
      element.id = `box${i + 1}${j + 1}`;
      element.className = "gridElement";
      //   element.draggable = true;
      let text = document.createTextNode(`${i + 1}-${j + 1}`);
      element.appendChild(text);
      node.appendChild(element);
    }
    parent.appendChild(node);
  }

  //rows for colors
  let node = document.createElement(null);
  node.className = "rows colors";
  node.id = "colors";
  for (let i = 0; i < cols; i++) {
    let element = document.createElement("div");
    element.id = `color-${i + 1}`;
    element.className = "colorgridElement";
    element.style.background = getRandomColor();
    // let text = document.createTextNode(`Color${i + 1}`);
    // element.appendChild(text);
    node.appendChild(element);
  }

  parent.appendChild(node);

  // color pick logic

  let colorPicked;

  let colornode = document.querySelector("#colors");
  colornode.addEventListener("click", (e) => {
    colorPicked = e.target.style.background;
    // console.log(e.target.style.background);
  });

  //applying color to grid on click
  parent.addEventListener("click", (e) => {
    if (!colorPicked) {
      alert("Pick a colour first");
    } else {
      let eleId = e.target.id;
      //   console.log(eleId);
      //   let ele = document.querySelector(`#${eleId}`);
      let ele = e.target;
      ele.style.background = colorPicked;
    }
  });

  parent.addEventListener("mouseover", (e) => {
    e.preventDefault();

    // if (!colorPicked) {
    //   alert("Pick a colour first");
    // } else {
    let ele = e.target;
    if (ele.className == "gridElement") {
      ele.style.background = colorPicked;
    }
    // }
  });

  //   parent.addEventListener("mouseup", (e) => {
  //     e.preventDefault();
  //     // if (!colorPicked) {
  //     //   alert("Pick a colour first");
  //     // } else {
  //     let ele = e.target;
  //     ele.style.background = "";
  //     // }
  //   });
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
