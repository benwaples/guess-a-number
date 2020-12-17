export function computersGuess() {
    return Math.ceil(Math.random() * 20);
}

export function resetGame(result, remainingGuesses, totalPlayed) {
    result.textContent = 'you lose';
    remainingGuesses = 4;
    totalPlayed++;
}