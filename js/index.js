const $ham = document.querySelector(".ham");
const $nav = document.querySelector(".nav");

const $imgTitle = document.querySelectorAll(".imgTitle > li");
const $tabImg = document.querySelectorAll(".tabImg > li");

$ham.addEventListener("click", () => {
  $ham.classList.toggle("on");
  $nav.classList.toggle("on");
});

function show(num) {
  $imgTitle.forEach((a) => {
    a.classList.remove("on");
  });
  $imgTitle[num].classList.add("on");

  $tabImg.forEach((a) => {
    a.classList.remove("on");
  });
  $tabImg[num].classList.add("on");
}

$imgTitle.forEach((tab, idx) => {
  tab.addEventListener("click", () => {
    show(idx);
  });
});
