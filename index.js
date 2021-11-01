const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNavigation.classList.toggle('open');
  
  if (primaryNavigation.classList.contains('open')) {
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navToggle.setAttribute('aria-expanded', false);
  }
})