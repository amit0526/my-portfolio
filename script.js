// ===== TYPING EFFECT =====
var typed = new Typed(".typing", {
  strings: [
    "Frontend Developer",
    "JavaScript Developer",
    "React Learner",
    "Web Designer"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});


// ===== FADE-IN (SECTION + CARD) =====
const elements = document.querySelectorAll('.fade-in');

function checkScroll() {
  elements.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      // stagger effect (delay without CSS change)
      setTimeout(() => {
        el.classList.add('show');
      }, index * 100);
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);


// ===== CARD HOVER EFFECT (JS BASED) =====
const cards = document.querySelectorAll('.project-card, .about-container, .contact-box');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "translateY(-5px) scale(1.02)";
    card.style.boxShadow = "0 0 20px rgba(0,255,157,0.3)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "none";
    card.style.boxShadow = "none";
  });
});


// ===== MOUSE GLOW EFFECT (NO CSS REQUIRED) =====
const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "200px";
glow.style.height = "200px";
glow.style.background = "radial-gradient(circle, rgba(0,255,157,0.25), transparent 70%)";
glow.style.pointerEvents = "none";
glow.style.transform = "translate(-50%, -50%)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

// Mouse move
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Mobile touch
document.addEventListener("touchmove", (e) => {
  glow.style.left = e.touches[0].clientX + "px";
  glow.style.top = e.touches[0].clientY + "px";
});
