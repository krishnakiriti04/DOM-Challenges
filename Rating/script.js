/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  // write logic to create star rating utility.
  let star = document.querySelector(el);

  for (let i = 0; i < count; i++) {
    let newStar = document.createElement("span");
    newStar.id = "star-" + (i + 1);

    let iTag = document.createElement("i");
    iTag.className = "fa fa-star-o";
    iTag.id = "icon-" + (i + 1);
    newStar.appendChild(iTag);
    star.append(newStar);
  }

  //adding on click event listener
  star.addEventListener("click", (e) => {
    let rating = parseInt(e.target.id.split("-")[1]);
    callback(rating);
    for (let i = 0; i < count; i++) {
      let ele = document.getElementById(`icon-${i + 1}`);
      if (i < rating) {
        ele.className = "fa fa-star";
      } else {
        ele.className = "fa fa-star-o";
      }
    }
  });
}
