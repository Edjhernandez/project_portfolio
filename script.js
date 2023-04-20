const btb = document.querySelector('button.burger');
const showMenu = document.querySelector('.navbar');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
const close = document.querySelector('main');
const close2 = document.querySelector('footer');
const menu = document.querySelectorAll('.navbar a');

btb.addEventListener('click', () => {
  l1.classList.toggle('activeline1');
  l2.classList.toggle('activeline2');
  l3.classList.toggle('activeline3');
  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
  } else {
    showMenu.style.display = 'block';
  }
});

close.addEventListener('click', () => {
  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
    l1.classList.toggle('activeline1');
    l2.classList.toggle('activeline2');
    l3.classList.toggle('activeline3');
  }
});

close2.addEventListener('click', () => {
  if (showMenu.style.display === 'block') {
    showMenu.style.display = 'none';
    l1.classList.toggle('activeline1');
    l2.classList.toggle('activeline2');
    l3.classList.toggle('activeline3');
  }
});

for (let ii = 0; ii < menu.length; ii += 1) {
  menu[ii].addEventListener('click', () => {
    if (showMenu.style.display === 'block') {
      showMenu.style.display = 'none';
      l1.classList.toggle('activeline1');
      l2.classList.toggle('activeline2');
      l3.classList.toggle('activeline3');
    }
  });
}
