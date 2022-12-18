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
