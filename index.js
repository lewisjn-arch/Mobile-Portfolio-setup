let burgerMenu = document.querySelector('.burger_menu');
let navMenu = document.querySelector('.nav_menu');
let navLogo = document.querySelector('.nav_bar_logo');
let navBar = document.querySelector('.nav_bar_container');


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
