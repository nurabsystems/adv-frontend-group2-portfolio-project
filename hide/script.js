/* ==========================================
        SCROLL REVEAL - Custom Sections
=========================================== */

const customRevealEls = document.querySelectorAll(
    ".project-card-custom, .skill-card-custom, .testimonial-card-custom"
);

customRevealEls.forEach(el => el.classList.add("fade-up-custom"));

function revealCustomOnScroll() {
    customRevealEls.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active-custom");
        }
    });
}

window.addEventListener("scroll", revealCustomOnScroll);
revealCustomOnScroll();