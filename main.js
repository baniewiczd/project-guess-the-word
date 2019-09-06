//random to choose one word from Array words

let guessTheWordGame;
let hidden;
newGame();

function newGame() {
    guessTheWordGame = new GuessTheWordGame();
    document.getElementById('btn-start').onclick;
    hidden = document.getElementsByClassName('hidden')[0];
    let letters = '';
    guessTheWordGame.wordArray.forEach((letter, index) => {
        letters += `<div class='letters' id='letter${index}'>_</div>`;
    });
    hidden.innerHTML = letters;
}

//Event user click the Letter-buttons
Array.from(document.getElementsByClassName('alphabet')).forEach(alphabet => {
    alphabet.onclick = () => {
        guessTheWordGame.numberOfAttempts = guessTheWordGame.numberOfAttempts - 1;

        document.getElementById('attempts_number').innerHTML = guessTheWordGame.numberOfAttempts;

        guessTheWordGame.wordArray.forEach((wordArrayLetter, indexToChange) => {

            if (alphabet.innerHTML === wordArrayLetter.toUpperCase()) {

                hidden.children[indexToChange].innerText = wordArrayLetter;
                guessTheWordGame.guessedLetters = guessTheWordGame.guessedLetters + 1;

                if (guessTheWordGame.checkIfDone()) {
                    document.getElementById('score').innerHTML = "Bravo!";
                   document.getElementById newGame();
                }
            }
        })
        if (guessTheWordGame.checkIfDone()) {
            document.getElementById('score').innerHTML = "Sorry!";
            newGame();
        }
    };
});



