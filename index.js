import './index.css';
console.log('Working');

const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    navbar.classList.remove('fixed');
  }
  if (window.scrollY > 0) {
    navbar.classList.add('fixed');
  }
});

const menuLines = document.querySelector('.navbar__lines');
const navbarMenu = document.querySelector('.navbar__menu');

menuLines.addEventListener('click', (e) => {
  menuLines.classList.remove('visible');
  navbarMenu.classList.remove('hidden');
  menuLines.classList.add('hidden');
  navbarMenu.classList.add('visible');
});
