document.addEventListener("DOMContentLoaded", async () => {

    /* =========================================
       LOAD NAVBAR
    ========================================= */

    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer) {

        try {

            const response = await fetch("/components/navbar.html");

            if (!response.ok) {
                throw new Error("Navbar could not be loaded");
            }

            const navbarHTML = await response.text();

            navbarContainer.innerHTML = navbarHTML;

            console.log("✅ Navbar loaded");


            /* =========================================
               MOBILE MENU
            ========================================= */

            const menuToggle =
                document.getElementById("menuToggle");

            const mainNav =
                document.getElementById("mainNav");


            if (menuToggle && mainNav) {

                menuToggle.addEventListener("click", () => {

                    const isOpen =
                        mainNav.classList.toggle("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                    console.log(
                        "Mobile menu:",
                        isOpen ? "OPEN" : "CLOSED"
                    );

                });


                /* Close menu after clicking normal nav link */

                mainNav.querySelectorAll("a").forEach((link) => {

                    link.addEventListener("click", () => {

                        mainNav.classList.remove("open");

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    });

                });

            } else {

                console.error(
                    "❌ menuToggle or mainNav not found"
                );

            }

        } catch (error) {

            console.error(
                "❌ Navbar error:",
                error
            );

        }
    }


    /* =========================================
       LOAD FOOTER
    ========================================= */

    const footerContainer = document.getElementById("footer");

    if (footerContainer) {

        try {

            const response =
                await fetch("/components/footer.html");

            if (!response.ok) {
                throw new Error("Footer could not be loaded");
            }

            const footerHTML =
                await response.text();

            footerContainer.innerHTML =
                footerHTML;


            console.log("✅ Footer loaded");


            /* Current Year */

            document
                .querySelectorAll(".current-year")
                .forEach((element) => {

                    element.textContent =
                        new Date().getFullYear();

                });

        } catch (error) {

            console.error(
                "❌ Footer error:",
                error
            );

        }
    }

});