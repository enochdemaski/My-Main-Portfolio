// import {project} from "./projects"


function btnClick(btnSelector, menuSelector){
   return btnSelector.addEventListener("click", ()=>{
        menuSelector.classList.toggle("show")
   })
}
// -------------------------------
// Mobile menu toggle
// -------------------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
//MENU 
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
message.push("Good Afternoon, Welcome To My Home.")
}else{
 message.push("Good Evening, Drop a Message")
}

// FOR THEME PANEL

const theme = document.querySelector(".theme")
const themeMenu = document.querySelector(".class-theme")

theme.addEventListener("click", ()=>{
    themeMenu.classList.toggle("actives")
})

const colorButton = document.querySelectorAll(".theme-color")
colorButton.forEach(buton => {
    buton.addEventListener("click", () => {
        const color = buton.dataset.bg;
        const text = buton.dataset.text;
        document.body.style.backgroundColor = color;
        document.body.style.color = text;
    })
})

// for(let i = 0; i <= colorButton.length; i++){
//     console.log(colorButton[i])
// }

document.addEventListener("click", (e)=>{
    const inMenu = themeMenu.contains(e.target)
    const onbton = theme.contains(e.target)
    if(inMenu || !onbton){
        themeMenu.classList.remove("actives")
    }
})





//BOOKS READ----------------------------------------------------

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


const projectsGrid = document.querySelector('.projects-grid');
const renderProjects = () => {
    if (!projectsGrid || typeof window.projectsData === 'undefined') return;
 
    const projectHtml = window.projectsData.map(project => {
    
        return `
           <div class="project-container">
            <div class="image">
              <h3>${project.title}</h3>
                 <img src="${project.img}"/>
                 </div>
                <div class="project">
                 <p>${project.description}</p>
                 <a href="${project.url}" class="btn">View Project</a>
                
              </div>
           </div>
        `;
    }).join('');

    projectsGrid.innerHTML = projectHtml;
};

renderProjects();



// -------------------------------
// CONTACT FORM SUBMISSION

const myForm = document.getElementById("MyForm");
const headMessage = document.getElementById("headmessage");
const nameInput = document.getElementById("name");
const nameMessage = document.getElementById("nameError");

const getNameValue = ()=> nameInput.value.trim()

myForm.addEventListener("submit", (e)=>{
    let isValid = true

    headMessage.textContent=""
    headMessage.classList.remove("generalstyle")
    nameMessage.textContent=""
    nameMessage.classList.remove("generalstyle")

    e.preventDefault();
        isValid = false
        headMessage.textContent= "Please fill the form."
        headMessage.classList.add("generalstyle")
    
        if(getNameValue() === ""){
            isValid = false
            nameMessage.textContent= "Name Is Needed."
            nameMessage.classList.add("generalstyle")
        }
})

nameInput.addEventListener("input", ()=>{
    const value = getNameValue()
    if(value === ""){
        nameMessage.textContent= "Name Is Needed."
        nameMessage.classList.add("generalstyle")
        nameInput.classList.remove("error-line")
        nameInput.classList.add("accept-line")
    }
})


//COPYRIGHT FOOTER
const copyright = document.getElementById("copyright")
let now = new Date()
let year = now.getFullYear()
copyright.append(` ${year} Enoch. All rights reserved.`);


// // TITLE TYPING ANIMATION
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