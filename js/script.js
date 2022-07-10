const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const body = document.getElementById("body");
const menuBtn = document.getElementById("menu-btn");
const span = document.getElementsByName("span");
const testimonial1 = document.getElementById("testimonial1");
const testimonial2 = document.getElementById("testimonial2");
const testimonial3 = document.getElementById("testimonial3");
const darkmodeToggler = document.getElementById("darkmode-toggler");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

darkmodeToggler.addEventListener("click", () => {
  body.classList.toggle("dark:text-white");
  body.classList.toggle("dark:bg-slate-800");
  nav.classList.toggle("dark:bg-slate-800");
  testimonial1.classList.toggle("dark:bg-slate-800");
  testimonial2.classList.toggle("dark:bg-slate-800");
  testimonial3.classList.toggle("dark:bg-slate-800");
  span.classList.toggle("dark:text-white");
});
