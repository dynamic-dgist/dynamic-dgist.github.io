document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu");
  const nav = document.querySelector("nav");

  if (button && nav) {
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("open", open);
      button.textContent = open ? "CLOSE" : "MENU";
    });
  }

  const carousel = document.querySelector(".hero-carousel");

  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".hero-track img"));
  const dots = Array.from(carousel.querySelectorAll(".carousel-dots button"));
  const prev = carousel.querySelector(".carousel-control.prev");
  const next = carousel.querySelector(".carousel-control.next");

  if (!slides.length || !dots.length || !prev || !next) return;

  let current = 0;
  let timer;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === current);
      dot.setAttribute("aria-current", dotIndex === current ? "true" : "false");
    });
  };

  const start = () => {
    timer = window.setInterval(() => showSlide(current + 1), 3000);
  };

  const restart = () => {
    window.clearInterval(timer);
    start();
  };

  prev.addEventListener("click", () => {
    showSlide(current - 1);
    restart();
  });

  next.addEventListener("click", () => {
    showSlide(current + 1);
    restart();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      restart();
    });
  });

  showSlide(0);
  start();
});
