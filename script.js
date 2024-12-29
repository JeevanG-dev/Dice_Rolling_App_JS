const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const winner = document.getElementById("winner");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

let player1Score = 0;
let player2Score = 0;

const onClickGame = () => {
  winner.textContent = "Who's Winner?";

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  player1.innerHTML = ` <img class="img" src="./assets/dice-${randomNumber1}.png" alt="dice1" />`;

  player2.innerHTML = ` <img class="img" src="./assets/dice-${randomNumber2}.png" alt="dice1" />`;

  if (randomNumber1 === 6) {
    player1Score++;
    score1.textContent = player1Score;
    winner.textContent = `Player 1 - ${player1Score}points`;

    if (player1Score === 2) {
      removePlayer();
      winner.textContent = "Player 1 is Winner";

      setTimeout(() => {
        reset();
      }, 3000);
    }
  }
  if (randomNumber2 === 6) {
    player2Score++;
    score2.textContent = player2Score;
    winner.textContent = `Player 2 - ${player2Score} points`;

    if (player2Score === 2) {
      removePlayer();
      winner.textContent = "Player 2 is Winner";

      setTimeout(() => {
        reset();
      }, 3000);
    }
  }
};

function removePlayer() {
  document.querySelectorAll(".player").forEach((child) => {
    child.remove();
  });
}

function reset() {
  location.reload();
}
