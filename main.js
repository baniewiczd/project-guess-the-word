//random to choose one word from Array words
let guessTheWordGame;
let hidden;

document.getElementById('btn-start').addEventListener("click", newGame);
blockAlphabet();
function activeAlphabet() {
    Array.from(document.getElementsByClassName('alphabet')).forEach(alphabet => {
        alphabet.disabled = false;
    });
}

function newGame() {
    guessTheWordGame = new GuessTheWordGame();

    activeAlphabet();
    document.getElementById('score').innerHTML = "";
    hidden = document.getElementsByClassName('hidden')[0];
    let letters = '';
    hidden.innerHTML = letters;
    guessTheWordGame.wordArray.forEach((letter, index) => {
        letters += `<div class='letters' id='letter${index}'>_</div>`;
    });
    hidden.innerHTML = letters;
}

function blockAlphabet() {
    Array.from(document.getElementsByClassName('alphabet')).forEach(alphabet => {
        alphabet.disabled = 'true';
    });
}

//Event user click the Letter-buttons
Array.from(document.getElementsByClassName('alphabet')).forEach(alphabet => {
    alphabet.onclick = () => {
        let decreaseNumberOfAttempts = true;
        alphabet.disabled = 'true';
        guessTheWordGame.wordArray.forEach((wordArrayLetter, indexToChange) => {

            if (alphabet.innerHTML === wordArrayLetter.toUpperCase()) {
                decreaseNumberOfAttempts = false;
                hidden.children[indexToChange].innerText = wordArrayLetter;
                guessTheWordGame.guessedLetters = guessTheWordGame.guessedLetters + 1;
            }
        })
        if (decreaseNumberOfAttempts === true) {
            guessTheWordGame.numberOfAttempts = guessTheWordGame.numberOfAttempts - 1;
            document.getElementById('attempts_number').innerHTML = guessTheWordGame.numberOfAttempts;
        }
        if (guessTheWordGame.checkIfWon() === true) {
            document.getElementById('score').innerHTML = "BRAVO !!!";
            blockAlphabet();
        }
        else if (guessTheWordGame.checkIfLost() === true) {
            document.getElementById('score').innerHTML = "SORRY !";
            blockAlphabet();
        }
    };
});



