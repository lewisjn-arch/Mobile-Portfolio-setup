let burgerMenu = document.querySelector('.burger_menu');
let navMenu = document.querySelector('.nav_menu');
let navLogo = document.querySelector('.nav_bar_logo');
let navBar = document.querySelector('.nav_bar_container');
let mainPage = document.querySelector('.page_container');
let header = document.querySelector('.nav_bar_container');
let bio = document.querySelector('.about_me');

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
    name1: 'Architecture',
    featureDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." +
    " This has been the industry's standard dummy text ever since the 1500s, when an" +
    " unknown printer took a standard dummy text.",
    description1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage1: 'Architectural.jpg',
    technologies1: ['Css', 'HTML', 'Bootstrap', 'Ruby'],
    liveVersion1: '#',
    sourceCode1: '#',
  },
  {
    name2: 'E-commerce Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage2: 'ecommerce.png',
    technologies2: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion2: '#',
    sourceCode2: '#',
  },
  {
    name3: 'University Portal',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage3: 'university.png',
    technologies3: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion3: '#',
    sourceCode3: '#',
  },
  {
    name4: 'Company Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage4: 'company.jpg',
    technologies4: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion4: '#',
    sourceCode4: '#',
  },
  {
    name5: 'Business Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description5:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage5: 'business.jpg',
    technologies5: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion5: '#',
    sourceCode5: '#',
  },
  {
    name6: 'Bank Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description6:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage6: 'banking.jpg',
    technologies6: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion6: '#',
    sourceCode6: '#',
  },
  {
    name7: 'Trading Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description7:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage7: 'trading.jpg',
    technologies7: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion7: '#',
    sourceCode7: '#',
  },
];

let portfolio = document.querySelector('.portfolio');
let popup = document.createElement('.section');
portfolio.appendChild(popup);
popup.className = 'popup_window';
popup.innerHTML  = 
// "<div class='popup_title_container'>
//       <h2 class="popup_title"><h2>
//       <img src="">
//  </div>
//   <ul>
//       <li></li>
//       <li></li>
//       <li></li>
//   </ul>
//   <div class="">
//       <p class="main_description">

//       </p>
//   </div>
//   <div class="button_container">
//       <button class="popup_button">
//           <span>See live</span>
//           <img src="Assets\Icons\Icon - Export.png">
//       </button>
//       <button class="popup_button">
//           <span>See source</span>
//           <img src="Assets\Icons\Frame.png">
//       </button>
//   </div>';


function seeProject(index) {
  const [name1, name2, name3, name4, name5, name6, name7] =
  name;
  const [description1, description2, description3, description4, description5, description6, description7] =
  description;
  const [technologies1, technologies2, technologies3, technologies4, technologies5, technologies6, technologies7] =
  technologies;
  const [projectImage1, projectImage2, projectImage3, projectImage4, projectImage5, projectImage6, projectImage7] =
  projectImage;
  const [liveVersion1, liveVersion2, liveVersion3, liveVersion4, liveVersion5, liveVersion6, liveVersion7] =
  liveVersion;
  const [sourceCode1, sourceCode2, sourceCode3, sourceCode4, sourceCode5, sourceCode6, sourceCode7] =
  sourceCode;
  const {
    name, description, technologies, projectImage, liveVersion, sourceCode, 
  } = projects[index];
};


function closePopup() {
  popup.remove();
  header.style.filter = 'blur(0)';
  mainPage.style.filter = 'blur(0)';
  portfolio.style.filter = 'blur(0)';
  bio.style.filter = 'blur(0)';
};
