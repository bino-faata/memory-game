const cardArray = [
  {
    name: 'anaconda',
    img: 'images/anaconda.png'
  },
  {
    name: 'anaconda',
    img: 'images/anaconda.png'
  },
  {
    name: 'python',
    img: 'images/python.png'
  },
  {
    name: 'python',
    img: 'images/python.png'
  },
  {
    name: 'asp',
    img: 'images/asp.png'
  },
  {
    name: 'asp',
    img: 'images/asp.png'
  },
  {
    name: 'cutter',
    img: 'images/cutter.png'
  },
  {
    name: 'cutter',
    img: 'images/cutter.png'
  },
  {
    name: 'dolphin',
    img: 'images/dolphin.png'
  },
  {
    name: 'dolphin',
    img: 'images/dolphin.png'
  },
  {
    name: 'cobra',
    img: 'images/cobra-mk-iii.png'
  },
  {
    name: 'cobra',
    img: 'images/cobra-mk-iii.png'
  }
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const displayResult = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

const defaultImageSrc = 'images/elite_logo.png';
const matchedSrc = 'images/done.png';

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', defaultImageSrc);
    card.setAttribute('data-id', i);
    card.setAttribute('width', '200px');
    card.setAttribute('height', '200px');
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

// check for matches
function checkForMatch () {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', defaultImageSrc);
    cards[optionTwoId].setAttribute('src', defaultImageSrc);
    alert('You have clicked the same image!');
  } else if (cardsChosen[0] === cardsChosen[1]) {
    console.log('You found a match');
    cards[optionOneId].setAttribute('src', matchedSrc);
    cards[optionTwoId].setAttribute('src', matchedSrc);
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', defaultImageSrc);
    cards[optionTwoId].setAttribute('src', defaultImageSrc);
    console.log('Sorry, try again');
  }
  cardsChosen = [];
  cardsChosenId = [];

  displayResult.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    displayResult.textContent = 'Congratulations! You found them all!';
  }
}

// flip card
function flipCard () {
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
