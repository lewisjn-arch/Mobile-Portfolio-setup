let mainPage = document.querySelector('.page_container');
let bio = document.querySelector('.about_me');

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
      name: 'Business Website',
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