const scoreEl = document.getElementById("score");
const button = document.getElementById("cat-button");
const header = document.getElementById("placeholder-header");
let incrementBy = 1;
let score = 0;
let clicked = 0;

function increaseScore() {
  scoreEl.textContent = parseInt(scoreEl.textContent) + incrementBy;
  clicked += 1;
  score = parseInt(scoreEl.textContent);

  if (clicked == 15) {
    incrementBy = 2;
  }

  if (clicked == 50) {
    incrementBy = 4;
  }

  if (clicked == 100) {
    incrementBy = 6;
  }

  if (score >= 50000) {
    button.style.display = "none";
    scoreEl.textContent = "You Won!";
    header.textContent = "Congrats, you just wasted your time on my game!";
  }
}
