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


const projects = [
  {
    name: 'Architecture',
    featureDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." +
    " This has been the industry's standard dummy text ever since the 1500s, when an" +
    " unknown printer took a standard dummy text.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Architectural.jpg',
    technologies: ['Css', 'HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    name: 'E-commerce Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'ecommerce.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    name: 'University Portal',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'university.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    name: 'Company Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'company.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    name: 'Business Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'business.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    name: 'Bank Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'banking.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    name: 'Trading Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'trading.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
];