// -------------------------------
// Mobile menu toggle
// -------------------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');


//METHOD 1
hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("active")
})
document.addEventListener("click", (e)=>{
    const inSideMenu = navLinks.contains(e.target)
    const onbtn = hamburger.contains(e.target)
    if(inSideMenu || !onbtn){
        navLinks.classList.remove("active")
    }
})

//GREETING MESSAGES


const greet = document.getElementById("greeting");

let message = [];

const currentTime = new Date().getHours();

if(currentTime < 12){
message.push("Good Morning, Welcome To My Home.")

}else if(currentTime < 18){
message.push("Good After, Welcome To My Home.")
}else{
 message.push("Good Evening, Drop a Message")
}
// greet.textContent = message;


// const title = document.getElementById("typing-animation")

// let titles = [];

// const currentSeconds = new Date().getSeconds();

// if(currentSeconds === 0.2){
//     titles.push("A Programmer.")
// }else if(currentSeconds === 0.5){
//     titles.push("A Graphic Design")
// }else{
//     titles.push("A Content Creator")
// }


// // title.textContent=titles;



// const text = "Hi, I'm Enoch"
// const typing  = document.getElementById("typingName")

// let i = 0
// function type() {
//     typing.textContent = text.slice(0, 1)
//     i++;

//     if(i > text.length){
//         i = 0
//     }

//     setTimeout(type, 150)
// }

// type()

// METHOD 2
// hamburger.addEventListener("click", ()=>{
//     navLinks.classList.toggle("active")
// })

// document.addEventListener("click", (e)=>{
//     if(!e.target.closest(".hamburger") || e.target.closest(".nav-links"))
//         navLinks.classList.remove("active")
// })

//METHOD 3
// hamburger.addEventListener("click", (e)=>{
// e.stopPropagation()
// navLinks.classList.toggle("active")
// })
// navLinks.addEventListener("click", (e)=>{
//     // e.stopPropagation()
// })

// document.addEventListener("click", ()=>{
//     navLinks.classList.remove("active")
// })

//METHOD 4
// const toggleMobileMenu = () => {
//     if (!navLinks) return;
//     navLinks.classList.toggle('active');
// };

// if (hamburger) {
//     hamburger.addEventListener('click', toggleMobileMenu);
// }


//BOOKS READ

const bookBtn = document.getElementById("btn");
const bookMenu = document.getElementById("book-menu")

bookBtn.addEventListener("click", ()=>{
    bookMenu.classList.toggle("show")
})


document.addEventListener("click", (e)=>{
    const inBook = bookMenu.contains(e.target)
    const bookButton = bookBtn.contains(e.target)

    if(inBook || !bookButton){
        bookMenu.classList.remove("show")
    }
})


// -------------------------------
// Smooth scrolling for navigation
// -------------------------------
const pageLinks = document.querySelectorAll('a[href^="#"]');

const handleNavLinkClick = (event) => {
    event.preventDefault();
    const link = event.currentTarget;
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

pageLinks.forEach(link => {
    link.addEventListener('click', event => {
        handleNavLinkClick(event);
        if (navLinks && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// -------------------------------
// Skills carousel controls
// -------------------------------
const carouselTrack = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentPosition = 0;
const slideAmount = 220;

const scrollCarousel = (position) => {
    if (!carouselTrack) return;
    carouselTrack.scrollTo({
        left: position,
        behavior: 'smooth'
    });
};

const scrollNext = () => {
    if (!carouselTrack) return;
    const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    currentPosition = Math.min(carouselTrack.scrollLeft + slideAmount, maxScroll);
    scrollCarousel(currentPosition);
};

const scrollPrev = () => {
    if (!carouselTrack) return;
    currentPosition = Math.max(carouselTrack.scrollLeft - slideAmount, 0);
    scrollCarousel(currentPosition);
};

if (nextButton) {
    nextButton.addEventListener('click', scrollNext);
}

if (prevButton) {
    prevButton.addEventListener('click', scrollPrev);
}

// -------------------------------
// Render projects from separate data file
// -------------------------------

//Selet the element where projets will be
const projectsGrid = document.querySelector('.projects-grid');


//Handling errors inase the element and projet does not exist
const renderProjects = () => {
    if (!projectsGrid || typeof window.projectsData === 'undefined') return;


    // puttong project into html
    const projectHtml = window.projectsData.map(project => {
        return `
            <div class="project">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" class="btn">View Project</a>
            </div>
        `;
    }).join('');

    projectsGrid.innerHTML = projectHtml;
};

renderProjects();

// -------------------------------
// Contact form submission
// -------------------------------
const contactForm = document.querySelector('form');
const formError = document.getElementById("formerro")

formError.textContent=""
formError.classList.remove("formerro")

const handleFormSubmit = (e) => {
    e.preventDefault();
    formError.textContent= "Please fill the form"
    formError.classList.add("formerro")
    // alert('Thank you for your message! I will get back to you soon.');
    // contactForm.reset();
};

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}


const copyright = document.getElementById("copyright")

let now = new Date()
let year = now.getFullYear()
copyright.append(` ${year} Enoch. All rights reserved.`);


// TITLE TYPING ANIMATION
const typed = new Typed(".typing-animation", {
    strings : ["A Programmer"," A Graphic Designer", "A Content Creator"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true,
})


const type = new Typed("#greeting",{
    strings : message,
    typeSpeed : 50,
    backSpeed : 50,
    smartBackspace : false,
    loop : true,
})