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

//mouseleave event
navLink.forEach(link => {
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '#fff'
    })
})

const contentSection = document.querySelector('.content-section');
const firstContent = contentSection.firstElementChild;
const imgContent = firstContent.nextElementSibling; 

imgContent.addEventListener('mouseenter', () => {
    imgContent.style.transform = 'scale(1.25)';
    imgContent.style.transition = 'all 2s';
})

imgContent.addEventListener('mouseleave', () => {
    imgContent.style.transform = 'scale(1)';
    imgContent.style.transition = 'all 2s';
})


//form
const inputFields = document.querySelectorAll('input');
inputFields.forEach(input => {
    if(input.type === 'text') {
        input.style.backgroundColor = "#fff";
    }
}); 

//onfocus event
inputFields.forEach(input => {
    input.addEventListener('focus', () => {
        if (input.type === 'text') {
            input.style.backgroundColor = '#15A3B8'; 
        }
    })
})

//blur event
inputFields.forEach(input => {
    if (input.type === 'text') {
        input.addEventListener('blur', () => {
            input.style.backgroundColor = '#fff';
        })
    }
})

const button = document.querySelectorAll('.btn');

//click event
button.forEach(button => {
    button.addEventListener('click', (e) => {
        alert('Fill the form!');
        e.stopPropagation(); 
    })
})

//dblclick event
h1.addEventListener('dblclick', () => {
    h1.textContent = 'Hop On!'; 
})

const destination = document.querySelectorAll('.destination');
const h4 = document.querySelectorAll('h4');

// load event
window.addEventListener('load', () => {
    alert('Welcome!')
})
//scroll event
const body = document.querySelector('body'); 
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 65 && window.pageYOffset <= 349) {
        body.style.backgroundColor = '#F9DECD';
    } else if (window.pageYOffset > 349 && window.pageYOffset <= 1112) {
        body.style.backgroundColor = '#ABD2E2';
    } else if (window.pageYOffset > 1112 && window.pageYOffset < 1388) {
        body.style.backgroundColor = '#FBB749'
    }
})

const inverseContent = document.querySelector('.inverse-content');

//keydown event
document.addEventListener('keydown', () => {
    alert('Enter you information on the form'); 
})

const submit = document.querySelector('.submit'); 

//prevent default
submit.addEventListener('click', (e) => {
    alert('Thank you!'); 
    e.preventDefault(); 
})

//resize event
window.addEventListener('resize', () => {
    h1.style.backgroundColor = 'red'; 
})

destination.forEach(destination => destination.addEventListener('click', () => {
    destination.style.backgroundColor = 'pink'; 
}))


const reset = submit.previousElementSibling;
const formBtnSpacing = (button) => {
    button.style.marginTop = '2.5rem';
    button.style.width = '45%'; 
    button.style.marginLeft = 'auto';
    button.style.marginRight = 'auto'; 
    button.style.fontSize = '2rem'; 
}
formBtnSpacing(reset);
formBtnSpacing(submit);








