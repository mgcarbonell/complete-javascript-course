'use strict';
// Random Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Selectors
const messageSelector = document.querySelector('.message');
const scoreSelector = document.querySelector('.score');
const highScoreSelector = document.querySelector('.highscore');
const numberSelector = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.btn again');

// Style Selectors
const bodyStyle = document.querySelector('body').style;
const numberStyle = numberSelector.style;

// Messages
const originalMessage = 'Start guessing...';
const losingMessage = 'You lost the game! :(';
const winningMessage = 'Hooray! Correct number! You won!!';
const noNumber = 'Hey! GUESS A NUMBER!';

// State
let score = 20;
let highScore = 0;

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // No input
    messageSelector.textContent = noNumber;
  } else if (guess === secretNumber) {
    // Winning Guess
    numberSelector.textContent = secretNumber;
    messageSelector.textContent = winningMessage;
    highScoreSelector.textContent = highScore;

    bodyStyle.backgroundColor = '#60b347';
    numberStyle.width = '30rem';
  } else if (guess > secretNumber) {
    // Too High Guess
    if (score > 0) {
      messageSelector.textContent = 'Too high!';
      score--;
      scoreSelector.textContent = score;
    } else {
      messageSelector.content = losingMessage;
    }
  } else if (guess < secretNumber) {
    // Too Low Guess
    if (score > 0) {
      messageSelector.textContent = losingMessage;
      score--;
      scoreSelector.textContent = score;
    } else {
      messageSelector.content = 'You lost! :(';
    }
  }
});

againButton.addEventListener('click', () => {
  secretNumber;
  if (score > highScore) {
    highScore = score;
    highScoreSelector.textContent = highScore;
  }
  bodyStyle.backgroundColor = '#222';
  numberStyle.width = '15rem';
  messageSelector.content = originalMessage;
  numberSelector.textContent = '?';
  score = score;
});
