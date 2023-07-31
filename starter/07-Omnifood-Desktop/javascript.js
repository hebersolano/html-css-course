const btnMobileNav = document.querySelector(".btn-mobile-nav");
const navBar = document.querySelector(".header");

btnMobileNav.addEventListener("click", function (e) {
  console.log(e);
  navBar.classList.toggle("nav-open");
});
