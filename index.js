const burgerMenu = document.querySelector(".burger_menu");
const navMenu = document.querySelector(".nav_menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_links").forEach(n => n.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
}));