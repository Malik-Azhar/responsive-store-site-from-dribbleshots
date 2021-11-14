
const navBar = document.querySelector("header .navbar");
const menuBar = document.querySelector("header #menu-bar");

menuBar.addEventListener("click", function(){
  navBar.classList.toggle("active");
  menuBar.classList.toggle("fa-times");
})
window.addEventListener("scroll", function(){
  navBar.classList.remove("active");
  menuBar.classList.remove("fa-times");
})