const rootElement = document.querySelector("#root");
const headerElement = document.createElement("header");

const hambMenuElement = document.createElement("div");
hambMenuElement.classList.add("hamburger-menu");

const logoElement = document.createElement("div");
logoElement.classList.add("logo");

const spanElement = document.createElement("span");

rootElement.appendChild(headerElement);
headerElement.appendChild(hambMenuElement);
// headerElement.prepend(logoElement);

// const hamburgerMenuElement = document.querySelector(".hamburger-menu");
// hamburgerMenuElement.addEventListener("click", function () {
//   hamburgerMenuElement.classList.toggle("open");
// });
