const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNavigation.classList.toggle('open');
  navToggle.classList.toggle('open');
})