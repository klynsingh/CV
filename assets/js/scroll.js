"use strict";

function initializeScroll() {

    const backToTopButton = document.getElementById("back-to-top");

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {

        const currentScrollY = window.scrollY;

        if (
            currentScrollY > 300 &&
            currentScrollY < lastScrollY
        ) {

            backToTopButton.classList.add("visible");

        } else {

            backToTopButton.classList.remove("visible");

        }

        lastScrollY = currentScrollY;

    });

}