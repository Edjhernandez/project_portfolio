const btb = document.querySelector('button.burger');
const showMenu = document.querySelector('.navbar');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
const close = document.querySelector('main');
const close2 = document.querySelector('footer');
const menu = document.querySelectorAll('.navbar a');
const btcard1 = document.getElementById('work1');
const btcard2 = document.getElementById('work2');
const btcard3 = document.getElementById('work3');
const cardModal1 = document.getElementById('popup1');
const cardModal2 = document.getElementById('popup2');
const cardModal3 = document.getElementById('popup3');
const btModal = document.querySelectorAll('.popup button');

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

btcard1.addEventListener('click', () => {
  cardModal1.style.display = 'flex';
});

btcard2.addEventListener('click', () => {
  cardModal2.style.display = 'flex';
});

btcard3.addEventListener('click', () => {
  cardModal3.style.display = 'flex';
});

for (let jj = 0; jj < btModal.length; jj += 1) {
  btModal[jj].addEventListener('click', () => {
    cardModal1.style.display = 'none';
    cardModal2.style.display = 'none';
    cardModal3.style.display = 'none';
  });
}
