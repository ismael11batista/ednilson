// Navegação Responsiva
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Alterar Cor do Header ao Rolar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Carrossel de Depoimentos
const testimonialItems = document.querySelector(".testimonial-items");
const prevTestimonial = document.querySelector(".testimonial-control.prev");
const nextTestimonial = document.querySelector(".testimonial-control.next");
let testimonialIndex = 0;
const totalTestimonials = document.querySelectorAll(".testimonial").length;

function showTestimonial(index) {
  testimonialItems.style.transform = `translateX(-${index * 100}%)`;
}

prevTestimonial.addEventListener("click", () => {
  testimonialIndex =
    testimonialIndex === 0 ? totalTestimonials - 1 : testimonialIndex - 1;
  showTestimonial(testimonialIndex);
});

nextTestimonial.addEventListener("click", () => {
  testimonialIndex =
    testimonialIndex === totalTestimonials - 1 ? 0 : testimonialIndex + 1;
  showTestimonial(testimonialIndex);
});

// Auto-play do Carrossel de Depoimentos
setInterval(() => {
  testimonialIndex =
    testimonialIndex === totalTestimonials - 1 ? 0 : testimonialIndex + 1;
  showTestimonial(testimonialIndex);
}, 7000); // Muda a cada 7 segundos

// FAQ Interativo
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector("h4");
  question.addEventListener("click", () => {
    // Fecha outros itens
    faqItems.forEach((el) => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });
    // Abre ou fecha o item clicado
    item.classList.toggle("active");
  });
});

// Formulário Multi-etapa
const form = document.getElementById("contactForm");
const formSteps = document.querySelectorAll(".form-step");
let currentStep = 0;

const nextButtons = document.querySelectorAll(".next-button");
const prevButtons = document.querySelectorAll(".prev-button");

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      // Validação antes de avançar
      formSteps[currentStep].classList.remove("active");
      currentStep++;
      formSteps[currentStep].classList.add("active");
    }
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("active");
    currentStep--;
    formSteps[currentStep].classList.add("active");
  });
});

// Função de Validação Simples
function validateStep(step) {
  let isValid = true;
  const currentFormStep = formSteps[step];
  const inputs = currentFormStep.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
      input.reportValidity();
    }
  });

  return isValid;
}

// Validação Simples de Formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário enviado com sucesso! Responderemos em até 24 horas.");
  form.reset();
  formSteps.forEach((step) => step.classList.remove("active"));
  formSteps[0].classList.add("active");
  currentStep = 0;
});

// Função para rolar para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
