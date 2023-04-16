const btb = document.querySelector('button.burger');
const showMenu = document.querySelector('.menu');

function show() {
  showMenu.classList.toggle('menu');
}

btb.addEventListener('click', show);
