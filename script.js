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


