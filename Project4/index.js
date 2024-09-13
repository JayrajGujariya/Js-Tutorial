let form = document.querySelector("form");
let warning = document.querySelector(".warning");
let guessedNumber = document.querySelector("#guessedNumber");
let submitGuess = document.querySelector("#submitGuess");
let randomNumber = parseInt(Math.random() * 100 + 1);
let displayMsg = document.querySelector(".displayMassage");
let attemptsRemaining = 10;
let resetButton = document.createElement("button");
resetButton.classList.add('resetBtn')
let playGame = true;
if (playGame) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let guessedNumber = parseInt(
      document.querySelector("#guessedNumber").value
    );
    console.log(guessedNumber);
    validateGuess(guessedNumber);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("⚠ Please enter valid number");
  } else if (guess < 1) {
    alert("⚠ Please enter number greater than 1");
  } else if (guess > 100) {
    alert("⚠ Please enter number less than 100");
  } else {
    handleCheck(guess);
  }
}

function displayMassage(msg) {
  displayMsg.innerHTML = `${msg}`;
}
function handleCheck(guess) {
  attemptsRemaining--;
  if (attemptsRemaining === 0) {
    playGame = false;
    resetButton.textContent = "Play again";
    form.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
    submitGuess.disabled = true;
    displayMassage(`Sorry, you've run out of attempts.<br></br> The correct number was ${randomNumber}`)
    form.appendChild(div);
  } else {
    if (randomNumber === guess) {
      displayMassage(`Congrats!...you did it in ${attemptsRemaining} attempts`);
      playGame = false;
    } else if (guess < randomNumber) {
      displayMassage(
        `Number is TOO less <br></br>${attemptsRemaining} attempts Remaining `
      );
    } else {
      displayMassage(
        `Number is TOO greater <br></br> ${attemptsRemaining} attempts Remaining `
      );
    }
  }
}

function resetGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  attemptsRemaining = 10;
  playGame = true;
  displayMassage(`${attemptsRemaining} attempts Remaining`);
  submitGuess.disabled = false;
  resetButton.remove();
}
