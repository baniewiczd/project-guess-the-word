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

    checkIfDone() {
        if (guessTheWordGame.guessedLetters === guessTheWordGame.wordArray.length) {
            document.getElementById('score').innerHTML = "Bravo!";
            return true;;
        }
        if (guessTheWordGame.numberOfAttempts === 0) {
            document.getElementById('score').innerHTML = "Sorry!";
            return true;; 
        }
        else return false;
    }
}

