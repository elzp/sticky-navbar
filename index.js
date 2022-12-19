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
const close = document.querySelector('.navbar__close');

menuLines.addEventListener('click', (e) => {
  menuLines.classList.remove('visible');
  navbarMenu.classList.remove('hidden');
  close.classList.remove('hidden');

  menuLines.classList.add('hidden');
  navbarMenu.classList.add('visible');
  close.classList.add('visible');
});

close.addEventListener('click', (e) => {
  navbarMenu.classList.remove('visible');
  close.classList.remove('visible');
  menuLines.classList.remove('hidden');
  navbarMenu.classList.add('hidden');
  close.classList.add('hidden');
  menuLines.classList.add('visible');
});
