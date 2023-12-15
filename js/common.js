import "./components/carousel.js";

// Menu
document.body.addEventListener("click", () => {
  document.body.classList.remove("has-menu-open");
});

document.getElementById("menu-button").addEventListener("click", (ev) => {
  document.body.classList.toggle("has-menu-open");
  ev.stopPropagation();
});
document.getElementById("menu").addEventListener("click", (ev) => {
  ev.stopPropagation();
  setTimeout(() => {
    document.body.classList.remove("has-menu-open");
  }, 100);
});