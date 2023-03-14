// const rootElement = document.querySelector("#root");
// const header = document.createElement("header");
// const hamb = document.createElement("div");
// rootElement.appendChild(header);
// header.appendChild(hamb);
// hamb.classList.add("hamburger-menu");

const hamburgerMenuElement = document.querySelector(".hamburger-menu");
hamburgerMenuElement.addEventListener("click", function () {
  hamburgerMenuElement.classList.toggle("open");
});
