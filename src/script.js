let randomNumber = Math.floor(Math.random() * 100) + 1;
let person = {
  name: "Damiano",
  age: 26,
  doAction: function () {
    console.log(`${person.name} just smacked a bro!`);
  },
};

const smackBtn = document.querySelector(".btn");
smackBtn.addEventListener("click", person.doAction());

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
guessField.focus();

let guessCount = 1;
let resetButton;

function checkGuess() {
  //get user guesses
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += ` ${userGuess} /`;

  //check if won
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratualtions! You guessed correctly!";
    lastResult.style.background = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "Game Over!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.background = "red";

    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last Guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function resetGame() {
  guesscount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  resetButton.parentNode.removeChild(resetButton);

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

guessSubmit.addEventListener("click", checkGuess);
