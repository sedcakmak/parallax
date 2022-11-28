const expandDiv = document.getElementById("right");
const table = document.getElementById("table");
const profile = document.querySelector(".profile");
const path = document.querySelector(".path");
const secondHalf = document.querySelector(".second-half");
const left = document.querySelector("#left");
const speed = 3;

function expanding() {
  const scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
  const scrollAndSpeed = scrolltop / speed;
  const fromBottom = Math.min(Math.max(scrollAndSpeed, 0), 100) + "%";
  expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 25), 100) + "%";
  let slideTable = Math.min(Math.max(scrollAndSpeed, 10), 100);
  table.style.transform = `translateX(-${slideTable}px)`;
  //console.log(scrollAndSpeed);
  if (scrolltop === 300) console.log("scrolltop");
  slideTable === 100
    ? path.classList.add("animate")
    : path.classList.remove("animate");
  if (scrolltop >= 400) {
    expandDiv.style.position = "static";
    left.style.display = "none";
    table.style.display = "none";

    // secondHalf.style.transform = "translateY(450px)";
    //  secondHalf.style.height = Math.min(Math.max(scrollAndSpeed, 0), 100) + "%";
  } else {
    expandDiv.style.position = "fixed";
    left.style.display = "block";
    table.style.display = "block";
  }
  //console.log(secondHalf.style.transform);
}

window.addEventListener(
  "scroll",
  function () {
    // on page scroll
    requestAnimationFrame(expanding); // call parallaxing()
  },
  false
);
