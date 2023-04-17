const btb = document.querySelector('button.burger');
const showMenu = document.querySelector('.navbar');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');

function show() {
  l1.classList.toggle('activeline1');
  l2.classList.toggle('activeline2');
  l3.classList.toggle('activeline3');
  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
  } else {
    showMenu.style.display = 'block';
  }
}

btb.addEventListener('click', show);
