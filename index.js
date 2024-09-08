const next = document.querySelector(".next");
const back = document.querySelector(".back");
let img = 0;

const images = document.querySelector(".images");

function imageCarosel() {
  images.children[0].classList.add("active");
}

addEventListener("load", imageCarosel());

next.addEventListener("click", function () {
  if (img < 4) img++;
  images.children[img].classList.add("active");
  images.children[img - 1].classList.remove("active");
});

back.addEventListener("click", function () {
  if (img > 0) img--;
  images.children[img].classList.add("active");
  images.children[img + 1].classList.remove("active");
});
