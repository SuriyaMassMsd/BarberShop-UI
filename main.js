const menuEl = document.getElementById("menu-icon");
const navItemEl = document.querySelector("#nav-items");
const closeEl = document.querySelector("#close");

menuEl.addEventListener("click", () => {
  navItemEl.classList.remove("hidden");
  console.log("clicked");
});

closeEl.addEventListener("click", () => {
  navItemEl.classList.add("hidden");
  console.log("clicked");
});
