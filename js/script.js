 /*==========================================================
                NEXTGEN DEVELOPERS
       ADVANCED FRONTEND GROUP PORTFOLIO PROJECT
============================================================

Course:
Advanced Frontend Development

Project:
Team Portfolio Website

Technology Stack
--------------
HTML5
CSS3
Bootstrap 5
JavaScript (ES6)

Team Members
------------
1. Nurudeen 
2. Phamous
3. Zavirah
4. Furtune

Version
-------
1.0.0

==========================================================*/


/*==========================================================
            WAIT FOR HTML TO LOAD
==========================================================*/

/*
The browser reads HTML from top to bottom.

We wait until everything has loaded before
trying to access any HTML elements.
*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Loaded Successfully.");

    initializeWebsite();

});


/*==========================================================
            WEBSITE CONTROL CENTER
==========================================================*/

/*
Every feature starts here.

This makes the project:

✓ Easy to read

✓ Easy to maintain

✓ Easy to debug

✓ Easy for team members to contribute
*/




function initializeWebsite() {

    initializeLoader();

    initializeNavbar();

    initializeActiveNavigation();
    
    initializeTechnologyCards();

    animateCounter();

    revealCustomOnScroll();

}




/*FUNCTIONS*/

/*==========================================================
                PAGE LOADER
==========================================================*/

/*
The loading screen disappears after
the website has loaded.
*/

function initializeLoader() {

    // Find the loader

    const loader = document.getElementById("loader");

    // Safety check

    if (!loader) {

        return;

    }

    // Hide loader after a short delay

    window.addEventListener("load", function () {

        setTimeout(function () {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            loader.style.transition = "0.6s";

        }, 700);

    });

}

/*==========================================================
                STICKY NAVBAR
==========================================================*/

/*
When the user scrolls down,
the navbar changes appearance.
*/

function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {

        return;

    }

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {

            navbar.classList.add("shadow");

            navbar.style.padding = "10px 0";

        }

        else {

            navbar.classList.remove("shadow");

            navbar.style.padding = "15px 0";

        }

    });

}


/*==========================================================
            ACTIVE NAVIGATION LINK
==========================================================*/

/*
Highlight the menu item
that matches the section
currently visible.
*/

function initializeActiveNavigation() {

    // Get all sections

    const sections = document.querySelectorAll("section");

    // Get all navigation links

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight

            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

}


/*

What Part 1 Does

✅ Waits until the HTML has loaded

✅ Initializes the website

✅ Removes the loading screen

✅ Makes the navbar react when scrolling

✅ Highlights the active menu item

✅ Keeps the code organized for your teammates


*/



/*==========================================================
            NEXT FEATURES
==========================================================*/

/*
Part 2 will include

✓ Smooth Scrolling

✓ Scroll Reveal Animation

✓ Fade-up Animation

✓ Fade-left Animation

✓ Fade-right Animation

✓ Simple code with comments
*/






function animateCounter(counter){

    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 100;

    const update = () => {

        current += increment;

        if(current < target){

            counter.innerText = Math.floor(current);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;

        }
    }

    update();
}



/*==========================================================
        TECHNOLOGY SECTION ANIMATION
==========================================================*/

function initializeTechnologyCards() {

    // Select all technology cards

    const cards = document.querySelectorAll(".technology-card");

    // Create observer

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    // Observe every card

    cards.forEach(function(card){

        observer.observe(card);

    });

}


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