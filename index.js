const burgerMenu = document.querySelector('.burger_menu');
const navMenu = document.querySelector('.nav_menu');
const navLogo = document.querySelector('.nav_bar_logo');
const navBar = document.querySelector('.nav_bar_container');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.nav_links').forEach((n) => n.addEventListener('click', () => {
  burgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));