"use strict";

function initializeTheme() {

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (!themeToggle) return;

    themeToggle.addEventListener("click", (event) => {

        const isLight = body.classList.contains("light-mode");

        if (document.startViewTransition) {

            const x = event.clientX;
            const y = event.clientY;

            document.startViewTransition(() => {

                document.documentElement.style.setProperty("--x", x + "px");
                document.documentElement.style.setProperty("--y", y + "px");

                if (isLight) {
                    body.classList.remove("light-mode");
                    localStorage.setItem("theme", "dark");
                } else {
                    body.classList.add("light-mode");
                    localStorage.setItem("theme", "light");
                }

            });

        } else {

            if (isLight) {
                body.classList.remove("light-mode");
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.add("light-mode");
                localStorage.setItem("theme", "light");
            }

        }

    });

    const savedTheme = localStorage.getItem("theme") || "dark";

    if (savedTheme === "light") {
        body.classList.add("light-mode");
    }

}