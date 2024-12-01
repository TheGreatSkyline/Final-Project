/*
* Author: Joaquin Gomez
* 
*  Purpose: JavaScript file for JavaScript Final Project
*
* This is a TIC TAC TOE game
*/

// Get references to DOM elements
// Set ups the game
// the game board
const squares = document.querySelectorAll('.game-square');
// the turn tracker
const turnDisplay = document.getElementById('turn');
// the play again button
const playAgainButton = document.getElementById('button-play-again');
// the scoreboard for each player
const scoreboardX = document.getElementById('scoreboard-x');
// how many times player X has won
const scoreboardO = document.getElementById('scoreboard-o');
// how many times player O has won
// if the game is a tie
const scoreboardTies = document.getElementById('scoreboard-ties'); // New element for ties


// Initialize game state variables
// the current player
let currentPlayer = 'X';
// the game board
let gameState = ['', '', '', '', '', '', '', '', ''];
// the scoreboard
let scoreX = 0;
// how many times player X has won
// how many times player O has won
let scoreO = 0;
// if the game is a tie
let scoreTies = 0; // New variable for tie scores

// Define win conditions
const winConditions = [
    // horizontal wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal wins
    [0, 4, 8],
    [2, 4, 6]
];

// create a function to Handle square click event
function handleSquareClick(event) {
    // Get the index of the clicked square
    const clickedSquare = event.target;
    // know which square was clicked
    const clickedSquareIndex = Array.from(squares).indexOf(clickedSquare);

    // Prevent clicking on already occupied squares or after game is won
    if (gameState[clickedSquareIndex] !== '' || checkWinner()) {
        // If the square is already occupied or the game is won, do nothing
        return;
    }

    // Update game state and UI
    gameState[clickedSquareIndex] = currentPlayer;
    // once a square is clicked
    clickedSquare.textContent = currentPlayer;

    // Check for a winner
    if (checkWinner()) {
        // If there is a winner, update the score
        updateScore();
        // Prompt to play again
        playAgain();
        // Reset the game
        return;
    }

// Prompt to play again
function playAgain() {
    // Prompt to play again
    playAgainButton.style.display = 'block';
    // Reset the game
    setTimeout(() => {
        // Prompt to play again
        if (confirm('Game over! Do you want to play again?')) {
            // Reset the game
            resetGame();
        }
    }, 100);
    }
    
}