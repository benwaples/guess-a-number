// import functions and grab DOM elements
import { computersGuess, resetGame } from './utils.js';
const result = document.querySelector('.result');
const button = document.querySelector('.button');
const score = document.querySelector('.score');
console.log('test');
// initialize state
let randomNumber = computersGuess();
let totalPlayed = 0;
let totalWon = 0;
let remainingGuesses = 4;
// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const playersGuess = Number(document.querySelector('#guess').value);
    console.log('players guess', playersGuess);
    console.log('computer guess', randomNumber);

    if (playersGuess === randomNumber) {
        result.textContent = 'Boom you got it';
        totalWon++;
        totalPlayed++;
        remainingGuesses = 4;
        resetGame(result, remainingGuesses, totalPlayed);
        randomNumber = computersGuess();
    } else if (playersGuess > randomNumber) {
        result.textContent = 'too high';
    } else if (playersGuess < randomNumber) {
        result.textContent = 'too low';
    } 

    remainingGuesses === 0 && (randomNumber = resetGame(result, remainingGuesses, totalPlayed));

    score.textContent = `${totalWon}/${totalPlayed}`;
});