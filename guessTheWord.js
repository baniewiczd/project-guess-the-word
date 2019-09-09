class GuessTheWordGame {
    constructor() {
        this.numberOfAttempts = 10;
        this.lettersTried = '';
        this.wordArray = [];
        this.guessedLetters = 0;
        this.initGame();
    }
    initGame() {
        this.wordToGuess();
        document.getElementById('attempts_number').innerHTML = this.numberOfAttempts;
    }
    wordToGuess() {
        this.wordArray = words[Math.floor(Math.random() * words.length)].split('');
    }
    checkIfWon() {
        if (guessTheWordGame.guessedLetters === guessTheWordGame.wordArray.length) {
            return true;
        }
    }
    checkIfLost() {
        if (guessTheWordGame.numberOfAttempts === 0) {
            return true;
        }
    }
}

