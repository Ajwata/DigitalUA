const revealItems = document.querySelectorAll(
  ".section, .service-card, .why-card, .step, .glass-card"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

const hero = document.querySelector(".hero");
const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");

window.addEventListener("mousemove", (event) => {
  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 20;
  const y = (event.clientY / innerHeight - 0.5) * 20;

  if (hero) {
    hero.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
  }
  if (glow1) {
    glow1.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
  if (glow2) {
    glow2.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
  }
});
