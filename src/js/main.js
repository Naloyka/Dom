const goblin = document.querySelector('.goblin');
const container = [...document.querySelectorAll('.container')];

function randomPosition() {
  const lengthContainer = Math.floor(container.length - 1);
  let current;
  const randomNumber = Math.floor(Math.random() * (lengthContainer - 0 + 1));

  if (randomNumber === current) {
    randomPosition();
  } else {
    current = randomNumber;
    const { top, left } = container[randomNumber].getBoundingClientRect();
    goblin.style.top = `${top}px`;
    goblin.style.left = `${left}px`;
    goblin.style.display = 'block';
  }
}

setInterval(randomPosition, 900);
