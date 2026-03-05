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

ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 200,
});

ScrollReveal().reveal(".section, .project-card, .skill-card", {
  origin: "bottom",
  interval: 150,
});

document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");
});
