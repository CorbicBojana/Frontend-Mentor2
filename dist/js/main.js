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