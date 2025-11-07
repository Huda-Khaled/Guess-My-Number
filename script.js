"use strict";
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".btn.check");
const againBtn = document.querySelector(".btn.again");
const message = document.querySelector(".message");
const highscoreEl = document.querySelector(".highscore");
const scoreEl = document.querySelector(".score");
const numberEl = document.querySelector(".number");
const body = document.querySelector("body");

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function displayMessage(msg) {
  message.textContent = msg;
}

function updateScore() {
  score--;
  scoreEl.textContent = score;
  if (score === 0) displayMessage("💥 You lost the game!");
}

function resetGame() {
    score = 20;
    secretNumber = generateRandomNumber();
    scoreEl.textContent = score;
    numberEl.textContent = "?";
    guessInput.value = "";
    displayMessage("Start guessing...");
    body.style.backgroundColor = "#222";
    numberEl.style.width = "15rem";
    
}
console.log(secretNumber);

checkBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess) {
    displayMessage(" No number!");
  } else if (userGuess === secretNumber) {
    displayMessage(" Correct Number!");
    body.style.backgroundColor = "#60b347";
    numberEl.style.width = "30rem";
    numberEl.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else {
    displayMessage(userGuess > secretNumber ? " Too high!" : " Too low!");
    updateScore();
  }
});

againBtn.addEventListener("click", resetGame);
