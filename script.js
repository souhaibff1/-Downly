document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const bar = document.getElementById("progress");
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 12);
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal on scroll
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}

// Subtle 3D tilt on the hero card (desktop pointers only)
const card = document.getElementById("tilt");
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const calm = matchMedia("(prefers-reduced-motion:reduce)").matches;
if (card && fine && !calm) {
  const zone = card.parentElement;
  zone.addEventListener("pointermove", (e) => {
    const r = zone.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotate(-4deg) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  });
  zone.addEventListener("pointerleave", () => { card.style.transform = ""; });
}
