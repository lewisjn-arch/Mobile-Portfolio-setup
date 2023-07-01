const projects = [
  {
    title: 'E-commerce Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Assets/Images/ecommerce.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    title: 'University Portal',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Assets/Images/university.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    title: 'Company Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Assets/Images/company.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    title: 'Business Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Assets/Images/business.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    title: 'Bank Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Assets/Images/banking.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
  {
    title: 'Trading Website',
    previewDescription: 
    "A daily selection of privately personalized reads; no accounts or sign-ups required." + 
    " This Has been the industry's standard.",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
    "printer took a galley of type and scrambled it to make a type specimen book." + 
    " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    projectImage: 'Assets/Images/trading.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '#',
    sourceCode: '#',
  },
]

const thumbnailContainer = document.querySelector('.portfolio_thumbnails');

const displayData = () => {
    projects.map((projectData) => {
      const projectContainer = document.createElement('div');
      projectContainer.className = 'project_container';
      projectContainer.innerHTML = `
                                <div class="project_title">
                                    <h3>${projectData.title}</h3>
                                </div>
                                <div class="project_description">
                                    <p>${projectData.previewDescription}</p>
                                </div>
                                <div class="project_image"></div>
                                <ul class="project_skills">
                                    <li class="skill_container"><span class="skill">${projectData.technologies[0]}</span></li>
                                    <li class="skill_container"><span class="skill">${projectData.technologies[1]}</span></li>
                                    <li class="skill_container"><span class="skill">${projectData.technologies[2]}</span></li>
                                </ul>
                                <button type="button" class="project_link"><span class="link_text">See project</span></button>
                             `;
      projectContainer.style.background = `linear-gradient(180.45deg,
                                                            rgba(38, 38, 38, 0) 0.75%,
                                                            rgba(38, 38, 38, 0.9) 61.94%
                                                          ),
                                                          url('${projectData.projectImage}')`;
      projectContainer.style.backgroundSize = 'cover';                                                                                                     
      thumbnailContainer.appendChild(projectContainer);
    });
}

displayData();


