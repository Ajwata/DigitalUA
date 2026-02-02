<<<<<<< HEAD
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

const menuToggle = document.querySelector(".menu-toggle");
const navActions = document.querySelector(".nav-actions");

if (menuToggle && navActions) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navActions.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navActions.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 920) {
        navActions.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}
=======
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

const menuToggle = document.querySelector(".menu-toggle");
const navActions = document.querySelector(".nav-actions");

if (menuToggle && navActions) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navActions.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navActions.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 920) {
        navActions.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}
>>>>>>> 05f912165c1b525148548e517a3dc7a8e85d1683
