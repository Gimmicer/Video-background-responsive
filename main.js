const menuBtn = document.querySelector(".menu-btn");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const nav = document.querySelector(".navigation");

//Javascript for Responsive nav menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");

  if (menuBtn.classList.contains("active")) {
    open.classList.add("menu-open");
    close.classList.remove("menu-open");
  } else {
    open.classList.remove("menu-open");
    close.classList.add("menu-open");
  }
});

//java script for video slider
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
