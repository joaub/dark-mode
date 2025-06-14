
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});