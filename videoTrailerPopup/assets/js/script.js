const mainContainerEl = document.getElementById("main-container");
const trailerContainerEl = document.getElementById("trailer-container");
const watchBtnEl = document.getElementById("watch-btn");
const closeBtnEl = document.getElementById("close-btn");

watchBtnEl.addEventListener("click", () => {
  mainContainerEl.classList.add("hide-it");
  trailerContainerEl.classList.add("show-it");
});

closeBtnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("show-it");
  mainContainerEl.classList.remove("hide-it");
});
