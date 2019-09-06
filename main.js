//random to choose one word from Array words
let guessTheWordGame;
let hidden;

document.getElementById('btn-start').addEventListener("click", newGame);

function newGame() {
    guessTheWordGame = new GuessTheWordGame();
    document.getElementById('score').innerHTML = "";
    hidden = document.getElementsByClassName('hidden')[0];
    let letters = '';
    hidden.innerHTML = letters;
    guessTheWordGame.wordArray.forEach((letter, index) => {
        letters += `<div class='letters' id='letter${index}'>_</div>`;
    });
    hidden.innerHTML = letters;
}


//Event user click the Letter-buttons
Array.from(document.getElementsByClassName('alphabet')).forEach(alphabet => {
    alphabet.onclick = () => {
        alphabet.disabled = 'true';
        guessTheWordGame.numberOfAttempts = guessTheWordGame.numberOfAttempts - 1;
        document.getElementById('attempts_number').innerHTML = guessTheWordGame.numberOfAttempts;
        guessTheWordGame.wordArray.forEach((wordArrayLetter, indexToChange) => {

            if (alphabet.innerHTML === wordArrayLetter.toUpperCase()) {
                hidden.children[indexToChange].innerText = wordArrayLetter;
                guessTheWordGame.guessedLetters = guessTheWordGame.guessedLetters + 1;
            }
        })
        guessTheWordGame.checkIfDone();
    };
});



