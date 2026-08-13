/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

if (mobileMenuBtn && mobileNav) {

    mobileMenuBtn.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("open");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a navigation link
    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const siteHeader = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions = document.querySelectorAll(
    ".faq-question"
);

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem =
            question.closest(".faq-item");

        const isActive =
            currentItem.classList.contains("active");


        // Close all other items

        document.querySelectorAll(".faq-item").forEach((item) => {

            item.classList.remove("active");

        });


        // Open current item if it was closed

        if (!isActive) {

            currentItem.classList.add("active");

        }

    });

});
/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */
const revealElements = document.querySelectorAll(".reveal");
const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
    });
}, revealOptions);
revealElements.forEach(el => { revealOnScroll.observe(el); });
