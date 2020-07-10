// Your code goes here

const h1 = document.querySelector('h1');
const introImg = document.querySelector('.intro').firstElementChild;
const nav = document.querySelector('.nav'); 
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





