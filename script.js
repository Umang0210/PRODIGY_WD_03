const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";
let gameOver = false;

function handleCellClick(event) {
  const cellIndex = parseInt(event.target.dataset.cellIndex);
  if (cells[cellIndex].textContent === "" && !gameOver) {
    cells[cellIndex].textContent = currentPlayer;
    checkWinner();
    switchPlayer();
  }
}

function checkWinner() {
  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const cellA = cells[condition[0]].textContent;
    const cellB = cells[condition[1]].textContent;
    const cellC = cells[condition[2]].textContent;

    if (cellA === cellB && cellB === cellC && cellA !== "") {
      gameOver = true;
      alert(`Winner: ${cellA}`);
      break;
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function resetGame() {
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  gameOver = false;
}
