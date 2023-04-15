const openBtn = document.querySelector('.open-side-slider-btn');
const closeBtn = document.querySelector('.close-side-slider-btn');
const form = document.querySelector('.side-slider-form');

openBtn.addEventListener('click', () => {
  form.style.right = '0';
});

closeBtn.addEventListener('click', () => {
  form.style.right = '-300px';
});


