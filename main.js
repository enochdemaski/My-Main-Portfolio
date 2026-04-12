// -------------------------------
// Mobile menu toggle
// -------------------------------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

const toggleMobileMenu = () => {
    if (!navLinks) return;
    navLinks.classList.toggle('active');
};

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}



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

const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
};

if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}
