const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !service) {
    formNote.textContent =
      "Please enter your name, phone number and select a service.";
    return;
  }

  // WhatsApp number
  const whatsappNumber = "919694175311";

  // Message to be sent on WhatsApp
  const whatsappMessage =
`*AAYAT UNIFIED SERVICES - New Enquiry*

*Name:* ${name}
*Phone:* ${phone}
*Service:* ${service}
*Message:* ${message || "No additional message provided."}

Please contact this customer regarding their enquiry.`;

  // Encode message for WhatsApp URL
  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Reset form
  form.reset();

  formNote.textContent =
    "WhatsApp is opening with your enquiry details...";
});