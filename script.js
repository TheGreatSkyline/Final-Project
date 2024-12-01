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

