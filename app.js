// import functions and grab DOM elements
import { computersGuess } from './utils.js';
const result = document.querySelector('.result');
const button = document.querySelector('.button');
const score = document.querySelector('.score');
const response = document.querySelector('#response');
const displayGuesses = document.querySelector('.guesses');

// initialize state

let randomNumber = computersGuess();
let totalPlayed = 0;
let totalWon = 0;
let remainingGuesses = 4;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    response.src = '';
    const playersGuess = Number(document.querySelector('#guess').value);
    console.log('computer guess', randomNumber);

    if (playersGuess === randomNumber) {
        result.textContent = 'Boom you got it';
        totalWon++;
        totalPlayed++;
        remainingGuesses = 4;
        randomNumber = computersGuess();
        response.src = 'https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif';
    } else if (playersGuess > randomNumber) {
        result.textContent = 'too high';
        remainingGuesses--;
    } else if (playersGuess < randomNumber) {
        result.textContent = 'too low';
        remainingGuesses--;
    } 

    if (remainingGuesses === 0) {
        result.textContent = 'You lose';
        totalPlayed++;
        remainingGuesses = 4;
        randomNumber = computersGuess();
        response.src = 'https://media.giphy.com/media/3ePb1CHEjfSRhn6r3c/giphy.gif';
    }
    displayGuesses.textContent = `${remainingGuesses}`;
    score.textContent = `${totalWon}/${totalPlayed}`;
});