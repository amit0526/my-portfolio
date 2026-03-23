// ===== TYPING EFFECT =====
var typed = new Typed(".typing", {
  strings: [
    "Frontend Developer",
    "JavaScript Developer",
    "React Learner",
    "Web Designer",
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// ===== SCROLL REVEAL =====
const sr = ScrollReveal({
  distance: "50px",
  duration: 1200,
  delay: 150,
  reset: false, // better performance (no repeat animation)
});

// sections animation
sr.reveal(".section", {
  origin: "bottom",
  interval: 100,
});

// cards animation
sr.reveal(".project-card, .skill-card", {
  origin: "bottom",
  interval: 100,
});

// ===== MOUSE GLOW EFFECT (FIXED FOR MOBILE) =====
const isMobile = window.innerWidth <= 768;

if (!isMobile) {
  document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
  });
}
