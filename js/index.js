// Your code goes here

const h1 = document.querySelector('h1');
const intro = document.querySelector('.intro'); 
const introImg = document.querySelector('.intro').firstElementChild;
const nav = document.querySelector('.nav'); 
const introH2 = introImg.nextElementSibling; 
const navLink = document.querySelectorAll('.nav-link'); 

//mouseenter event
//hover effect on nav links
navLink.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = 'lightblue'
    })
})
navLink.forEach(link => {
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '#fff'
    })
})

//click event
introImg.addEventListener('mouseenter', () => {
    introImg.style.transform = 'scale(2)';
    introImg.style.opacity = '.4';
    introImg.style.transition = 'all 2s';
})
introImg.addEventListener('mouseleave', () => {
    introImg.style.transform = 'scale(1)';
    introImg.style.transition = 'all 2s';
})





