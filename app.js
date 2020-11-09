// selectors
const number = document.querySelector("#number");
const guess = document.querySelector("#guess");
const again = document.querySelector("#again");
const check = document.querySelector("#check");
const message = document.querySelector("#message");
const score = document.querySelector("#score");
const highScore = document.querySelector("#highScore");
const body = document.querySelector("body");
// global variables
let randomNum;
generateRandom();
let scoreNum = 20;
let highScoreNum = 0;
// listen on dom load
  document.addEventListener("DOMContentLoaded", function(){
    guess.focus();
  };
// listen on check
check.addEventListener("click", function (e) {
  e.preventDefault();
  checkResult();
  guess.focus();
  score.innerHTML = scoreNum;
  highScore.innerHTML = highScoreNum;
});
// listen on again
again.addEventListener("click", function () {
  generateRandom();
  console.log(randomNum);
  scoreNum = 20;
  number.innerHTML = "?";
  score.innerHTML = scoreNum;
  highScore.innerHTML = highScoreNum;
  message.innerHTML = "Start Guessing ...";
  guess.value = "";
  body.classList.remove("noWin");
  body.classList.remove("win");
  body.classList.add("background");
});

function checkResult() {
  const input = guess.value * 1;
  if (!input) {
    message.innerHTML = "NO Number !";
    guess.value = "";
  } else if (scoreNum <= 0) {
    message.innerHTML = "You Lost the Game";
    body.classList.remove("background");
    body.classList.add("noWin");
  } else if (input === randomNum) {
    message.innerHTML = "Correct Number";
    number.innerHTML = randomNum;
    highScoreNum = scoreNum;
    body.classList.remove("background");
    body.classList.add("win");
  } else if (input > randomNum) {
    message.innerHTML = "Too High";
    scoreNum--;
    guess.value = "";
  } else if (input < randomNum) {
    message.innerHTML = "Too Low";
    scoreNum--;
    guess.value = "";
  }
}
function generateRandom() {
  return (randomNum = Math.floor(Math.random() * 20));
}
