//==========MENU MOBILE
const menuOpen = document.querySelector(".menu_open");
const menuClose = document.querySelector(".menu_close");
const nav = document.querySelector(".nav");

menuOpen.addEventListener("click", () => {
    nav.classList.add("show");
    menuClose.classList.add("show");
})

menuClose.addEventListener("click", () => {
    nav.classList.remove("show");
    menuClose.classList.remove("show");
})

//==========SLIDER
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}