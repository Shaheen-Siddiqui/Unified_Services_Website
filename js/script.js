document.addEventListener("DOMContentLoaded", () => {



    /* =========================================
       CONTACT FORM
    ========================================= */

    const form =
        document.getElementById("contactForm");

    const formNote =
        document.getElementById("formNote");


    /* Form doesn't exist on every page */

    if (!form) {

      

        return;
    }





    form.addEventListener("submit", (event) => {

        event.preventDefault();

       


        /* Get values */

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const service =
            document
                .getElementById("service")
                .value;


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        /* Validation */

        if (!name || !phone || !service) {

            formNote.textContent =
                "Please enter your name, phone number and select a service.";

            return;
        }


        /* =========================================
           WHATSAPP
        ========================================= */

        const whatsappNumber =
            "919694175311";


        const whatsappMessage =
`*AYAT UNIFIED SERVICES - New Enquiry*

*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
*Message:* ${message || "No additional message provided."}

Please contact this customer regarding their enquiry.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;

        window.open(
            whatsappURL,
            "_blank"
        );


        /* Reset */

        form.reset();

        formNote.textContent =
            "WhatsApp is opening with your enquiry details.";

    });

});