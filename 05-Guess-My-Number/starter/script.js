'use strict';
// State
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Selectors
const messageSelector = document.querySelector('.message');
const scoreSelector = document.querySelector('.score');
const highScoreSelector = document.querySelector('.highscore');
const numberSelector = document.querySelector('.number');
const guessSelector = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const again = document.querySelector('.again');

// Style Selectors
let bodyStyle = document.querySelector('body').style;
let numberStyle = numberSelector.style;

// Messages
const originalMessage = 'Start guessing...';
const losingMessage = 'You lost the game! :(';
const winningMessage = 'Hooray! Correct number! You won!!';
const noNumber = 'Hey! GUESS A NUMBER!';
const highGuess = 'Too high!';
const lowGuess = 'Too low!';

const displayMessage = message => {
  messageSelector.textContent = message;
};

checkButton.addEventListener('click', () => {
  const guess = Number(guessSelector.value);
  if (!guess) {
    // No input
    displayMessage(noNumber);
  } else if (guess === secretNumber) {
    // Winning Guess
    numberSelector.textContent = secretNumber;
    displayMessage(winningMessage);
    highScoreSelector.textContent = highScore;
    bodyStyle.backgroundColor = '#60b347';
    numberStyle.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreSelector.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage(highGuess)
        : displayMessage(lowGuess);
      score--;
      scoreSelector.textContent = score;
    } else {
      displayMessage(losingMessage);
      scoreSelector.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(originalMessage);
  scoreSelector.textContent = score;
  numberSelector.textContent = '?';
  guessSelector.value = '';
  bodyStyle.backgroundColor = '#222';
  numberStyle.width = '15rem';
});
