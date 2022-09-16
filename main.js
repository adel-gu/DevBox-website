// Menu button Icon
const menu = document.querySelector('.navbar-toggler .navbar-toggler-icon');

menu.addEventListener('click', () => {
  menu.classList.toggle('navbar-toggler-icon');
  menu.classList.toggle('btn-close');
});

// Speakers cards
const speakers = [
  {
    name: 'Christian Buehner',
    position: `Entrepreneur; co-founded Open Text Corporation, Textuality and Antarctica Systems`,
    degree: `Bachelor of Science degrees in math and computer science`,
    picture: './assets/team/christian-buehner-DItYlc26zVI-unsplash.jpg',
    alt: 'Christian Buehner Picture',
  },
  {
    name: 'Christina Wocintechchat',
    position: `Entrepreneur; worked for Intel and Google`,
    degree: `Bachelor's degree in computer science`,
    picture:
      './assets/team/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg',
    alt: 'Christian Buehner Picture',
  },
  {
    name: 'Jonas Kakaroto',
    position: `DEC, Microsoft; co-founded Agrippa-Ord`,
    degree: `Bachelor's degree`,
    picture: './assets/team/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    alt: 'Jonas Kakaroto Picture',
  },
  {
    name: 'Julian Wan',
    position: `Microsoft; as an entrepreneur, co-founded The Tetris Company`,
    degree: `Degree in computer software engineering`,
    picture: './assets/team/julian-wan-WNoLnJo7tS8-unsplash.jpg',
    alt: 'Julian Wan Picture',
  },
  {
    name: 'Ludovic Migneault',
    position: `Teacher and Internet entrepreneur; co-founded Wikipedia`,
    degree: `Bachelor's and master's degrees in finance`,
    picture: './assets/team/ludovic-migneault-EZ4TYgXPNWk-unsplash.jpg',
    alt: 'Ludovic Migneault Picture',
  },
  {
    name: 'Stephanie Liverani',
    position: `Entrepreneur; co-founded NetMeridian Software, SponsorNet New Media and Confinity`,
    degree: `Bachelor's degree in computer science`,
    picture: './assets/team/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg',
    alt: 'Stephanie Liverani Picture',
  },
];

// Progam cards
const programs = [
  {
    icon: 'fa-solid fa-person-chalkboard',
    title: 'Lecture',
    description: `Listen to the speakers from various countries about the
    Software Engeneering.`,
  },
  {
    icon: 'fa-solid fa-display',
    title: 'Exhibition',
    description: `Appreciate various App development approaches and ideas for creative people.`,
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Forum',
    description: `Have the opportunity to share your thoughts With the experts in each field.`,
  },
  {
    icon: 'fa-solid fa-gem',
    title: 'Workshop',
    description: `Try to build your own project using open source license.`,
  },
  {
    icon: 'fa-brands fa-connectdevelop',
    title: 'Connect',
    description: `Get the opportunities to build and solidify your network with amazing experts`,
  },
];

const pCards = document.querySelector('#program .cards');
const sCards = document.querySelector('#speakers .cards');

function appendCard() {
  for (let i = 0; i < speakers.length; i++) {
    const cardTemplate = `<li class="card text-start">
    <div class="card-head d-flex">
      <div class="img-container">
        <img
          src="${speakers[i].picture}"
          alt="${speakers[i].alt}"
        />
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${speakers[i].name}</h3>
      <p>
        <strong
          >${speakers[i].position}
        </strong>
      </p>
      <hr class="separator-grey" />
      <p>
      ${speakers[i].degree}
      </p>
    </div>
    </li>`;

    sCards.innerHTML += cardTemplate;
  }

  for (let i = 0; i < programs.length; i++) {
    const cardTemplate = `
    <li class="card text-start">
      <div class="card-head d-flex">
        <a href=""><i class="${programs[i].icon}"></i></a>
        <h3 class="card-title">${programs[i].title}</h3>
      </div>
      <div class="card-body">
        <p>
        ${programs[i].description}
        </p>
      </div>
    </li>`;

    pCards.innerHTML += cardTemplate;
  }
}
window.addEventListener('load', appendCard);
