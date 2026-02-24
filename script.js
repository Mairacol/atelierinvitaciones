/* =========================
   INTRO LOADER
========================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.querySelector(".intro");
    if (intro) {
      intro.classList.add("intro-hide");
    }
  }, 1500);
});


/* =========================
   FADE UP ANIMATION
========================= */
const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target); // mejora performance
    }
  });
}, { threshold: 0.18 });

fadeElements.forEach(el => fadeObserver.observe(el));


/* =========================
   FAQ ACCORDION
========================= */
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});


/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".nav-mobile");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Cerrar menú al hacer click en un link
  document.querySelectorAll(".nav-mobile a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

}
const form = document.querySelector(".luxury-form");
const successMessage = document.querySelector(".form-success");
const submitBtn = document.querySelector(".submit-btn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  submitBtn.classList.add("loading");
  submitBtn.textContent = "ENVIANDO...";

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      submitBtn.textContent = "ENVIADO";
      successMessage.classList.add("show");
    } else {
      submitBtn.textContent = "ERROR";
    }
  });
});

const calendar = flatpickr("#fecha-evento", {
  locale: "es",
  dateFormat: "d M Y",
  allowInput: true,
  minDate: "today"
});

document.getElementById("clear-date").addEventListener("click", function() {
  calendar.clear();
});
