const columns = document.querySelectorAll(".col");
const restartBtn = document.querySelector(".restart-btn");
const winnerDisplay = document.querySelector(".winner-display");

let array = Array(9).fill(null);
let currentPlayer = "x";
let isWinner = true;

columns.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.textContent === "" && isWinner) {
      currentPlayer = currentPlayer === "o" ? "x" : "o";
      let id = el.id - 1;
      array[id] = currentPlayer;
      
      el.classList.add(`player-${currentPlayer}`);
      
      checkWinner();
      playerValueDisplay();
      checkDraw();
      el.disabled = true;
    }
  });
});

function playerValueDisplay() {
  let i = 0;
  array.forEach((v) => {
    if (v !== null) {
      columns[i].textContent = v;
    }
    i++;
  });
}

function checkWinner() {
  if (
    (array[0] !== null && array[0] === array[1] && array[2] === array[1]) ||
    (array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
    (array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
    (array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
    (array[2] !== null && array[2] === array[4] && array[4] === array[6]) ||
    (array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
    (array[3] !== null && array[3] === array[4] && array[3] === array[5]) ||
    (array[6] !== null && array[6] === array[7] && array[7] === array[8])
  ) {
    if (currentPlayer === "o") {
      winnerDisplay.innerHTML = "🎉 Player 1 (O) Wins!";
      winnerDisplay.className = "winner-display win-green";
    } else {
      winnerDisplay.innerHTML = "🎉 Player 2 (X) Wins!";
      winnerDisplay.className = "winner-display win-blue";
    }
    isWinner = false;
    addColumnClass();
    restartBtn.classList.add("restart-btn-toggle");
  }
}

function checkDraw() {
  if (!array.includes(null) && isWinner === true) {
    winnerDisplay.textContent = "🤝 The match is a draw!";
    winnerDisplay.className = "winner-display draw-gray";
    restartBtn.classList.add("restart-btn-toggle");
    addColumnClass();
    isWinner = false;
  }
}

function addColumnClass() {
  columns.forEach((elem) => {
    elem.classList.add("disable-mouse");
  });
}

function restartGame() {
  array = Array(9).fill(null);
  columns.forEach((al) => {
    al.innerHTML = "";
    al.disabled = false;
    al.className = "col";
  });
  isWinner = true;
  winnerDisplay.innerHTML = "";
  winnerDisplay.className = "winner-display";
  restartBtn.classList.remove("restart-btn-toggle");
  currentPlayer = "x";
}

restartBtn.addEventListener("click", restartGame);
