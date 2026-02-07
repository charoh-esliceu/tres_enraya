// Select all board squares
let buttons = document.querySelectorAll(".button");

// Select the restart button
let restartBtn = document.getElementById("restart");

// Select the paragraph where messages will be shown
let message = document.getElementById("message");

// Game state
let turn = 0;
let gameOver = false;
const board = Array(9).fill(null);

// Winning combinations
const winningPatterns = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];

// Check for a winner
function checkWinner(player) {
  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      board[a] === player &&
      board[b] === player &&
      board[c] === player
    ) {
      message.innerText = `Player ${player} wins!`;
      gameOver = true;
      return true;
    }
  }
  return false;
}

// Click on a square
buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {

    // If the square is already filled or the game is over, do nothing
    if (btn.innerText !== "" || gameOver) return;

    // Determine current player
    const player = turn % 2 === 0 ? "X" : "O";

    // Display the move and update the board
    btn.innerText = player;
    board[i] = player;

    // Move to the next turn
    turn++;

    // Check if the current player won
    if (checkWinner(player)) return;

    // Check for draw
    if (turn === 9) {
      message.innerText = "It's a draw!";
      gameOver = true;
    }
  });
});

// Restart game
restartBtn.addEventListener("click", () => {

  // Clear the visual board
  buttons.forEach(b => b.innerText = "");

  // Clear the logical board
  board.fill(null);

  // Clear message
  message.innerText = "";

  // Reset game state
  turn = 0;
  gameOver = false;
});
