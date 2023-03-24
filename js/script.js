const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const xx = document.getElementById("close-btn");
// const featureDown = document.getElementById("feature-down-icon");
// const featureUp = document.getElementById("feature-up-icon");
// const featureMenu = document.getElementById("feature-menu");

// const featureDownButton = document.getElementById("feature-down-button");
// const featureDownIcon = document.getElementById("feature-down-icon");
// const featureUpIcon = document.getElementById("feature-up-icon");
// const featureMenu = document.getElementById("feature-menu-toggle");

btn.addEventListener("click", () => {
  nav.classList.toggle("block");
  nav.classList.toggle("hidden");
});

xx.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

featureDownButton.addEventListener("click", () => {
  featureDownIcon.classList.toggle("hidden");
  featureMenu.classList.toggle("block");
  featureUpIcon.classList.toggle("hidden");
});

if (featureDownButton.classList.toggle("block")) {
  featureMenu.classList.add("block");
} else {
  featureMenu.classList.remove("hidden");
}

// featureDown.addEventListener("click", () => {
//   featureDown.classList.toggle("flex");
//   featureMenu.classList.toggle("block");
// });
