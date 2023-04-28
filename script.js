const btb = document.querySelector('button.burger');
const showMenu = document.querySelector('.navbar');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
const close = document.querySelector('main');
const close2 = document.querySelector('footer');
const menu = document.querySelectorAll('.navbar a');
const cardModal = document.querySelector('.container-popup');
const template = document.getElementById('temp-work').content;
const z = document.querySelector('.works > ul');
const fragment = document.createDocumentFragment();
const template2 = document.getElementById('temp-modal').content;
const zz = document.querySelector('.container-popup');
const fragment2 = document.createDocumentFragment();

const cardContent = [
  {
    Id: '0',
    title: 'News Blog1',
    techs: 'HTML, SCSS, JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: './images/Rectangle18@2x.webp',
    linkWork: '#',
    linkDescrip: 'work1',
  },
  {
    Id: '1',
    title: 'News Blog2',
    techs: 'HTML, SCSS, JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: './images/Rectangle18@2x.webp',
    linkWork: '#',
    linkDescrip: 'work2',
  },
  {
    Id: '2',
    title: 'News Blog3',
    techs: 'SCSS, JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: './images/Rectangle18@2x.webp',
    linkWork: '#',
    linkDescrip: 'work3',
  },
  {
    Id: '3',
    title: 'News Blog4',
    techs: 'SCSS, JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: './images/Rectangle18@2x.webp',
    linkWork: '#',
    linkDescrip: 'work4',
  },
  {
    Id: '4',
    title: 'News Blog5',
    techs: 'SCSS, JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: './images/Rectangle18@2x.webp',
    linkWork: '#',
    linkDescrip: 'work5',
  },
  {
    Id: '5',
    title: 'News Blog6',
    techs: 'SCSS, JS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imgUrl: './images/Rectangle18@2x.webp',
    linkWork: '#',
    linkDescrip: 'work6',
  },
];

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

cardContent.forEach((element) => {
  template.querySelector('h2').textContent = element.title;
  template.querySelector('h3').textContent = element.techs;
  template.querySelector('p').textContent = element.description;
  template.querySelector('img').setAttribute('src', element.imgUrl);
  template.querySelector('button').setAttribute('id', element.Id);
  const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

z.appendChild(fragment);

document.addEventListener('click', (e) => {
  if (e.target.matches('.card button')) {
    const index = e.target.id;
    template2.querySelector('img').setAttribute('src', cardContent[index].imgUrl);
    template2.querySelector('h2').textContent = cardContent[index].title;
    template2.querySelector('h3').textContent = cardContent[index].techs;
    template2.querySelector('p').textContent = cardContent[index].description;
    template2.querySelector('a').textContent = cardContent[index].linkDescrip;
    template2.querySelector('a').setAttribute('href', cardContent[index].linkWork);
    const clone2 = document.importNode(template2, true);
    fragment2.appendChild(clone2);
    zz.appendChild(fragment2);
    cardModal.style.display = 'flex';
  }

  if (e.target.matches('.popup button *')) {
    cardModal.style.display = 'none';
    while (zz.firstChild) {
      zz.removeChild(zz.firstChild);
    }
  }
});
