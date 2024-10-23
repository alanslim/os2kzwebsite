let harvestH1 = document.querySelector(".harvest-h1");
let harvestText = document.querySelector(".harvest-text");

 if (harvestH1 && harvestText) {
window.onload = function () {
 
    harvestH1.classList.add("show");
    harvestText.classList.add("show");
  } 
};




const header = document.querySelector("header"),
  burger = document.querySelector(".burger");

const navOs2 = document.querySelector(".nav__os2");

burger.addEventListener("click", () => {
  if (header) {
    header.classList.toggle("active");
  } else if (navOs2) {
    console.log("active!");
    navOs2.classList.toggle("active");
  }
});
