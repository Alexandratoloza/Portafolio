// Animación de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
});

// Efecto en la barra de navegación: cambio de color al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow", "bg-dark");
  } else {
    navbar.classList.remove("shadow");
  }
});

// Smooth scroll para los enlaces del menú
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});
