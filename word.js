var Letter = require("./letter.js");
var answers = require("./answers.js");
var playGame = require("./game.js");

// Arrays and variables

var wordsArray = [];
var lettersArray = [];
var correctGuesses = [];
var guessedLetters = [];
var guessesLeft = 10;

// Word constructor for answer

function Word() {
    this.answer = answers[Math.floor(Math.random() * answers.length)]; // Choose random word
    this.passLetters = function () { // Pass into letters constructor
        var answerLetters = this.answer.split('');
        for (i = 0; i < answerLetters.length; i++) {
            lettersArray[i] = new Letter(answerLetters[i]);
            lettersArray[i].showLetter();

        }
        // console.log(lettersArray);
    };
    this.check = function (guess) { // Check if guess was correct
        for (var i in guessedLetters) { // if user has already guessed letter have them choose a different letter
            if (guess == guessedLetters[i]) {
                console.log("\nYou already guessed that letter...Try again\n")
                playGame();
                return;
            }
        }
        var correctBool = false;
        for (var i in lettersArray) {
            guessedLetters.push(guess); // Keep track of all guesses letters so user does not guess same letter twice
            if (guess == lettersArray[i].letter) { // If correct display letter and push correct guess into array
                lettersArray[i].show = true;
                lettersArray[i].showLetter();
                correctGuesses.push(guess);
                correctBool = true;
            } else {
                lettersArray[i].showLetter();
            }
        }
        if (correctBool === false) { // If guess not correct subtract from guessesLeft
            guessesLeft--;
            console.log("\nGuesses Left: " + guessesLeft);
        }
        if (correctGuesses.length === lettersArray.length) { // Check if user has guessed all leters and if so finish game
            console.log("\nYOU WIN!!");
        } else if (guessesLeft > 0) { // Check if user out of guesses and if not let player guess again
            playGame();
        } else { // If user out of guesses and hasn't won then end game 
            console.log("\nYOU LOSE!!");
            console.log("\nCorrect Answer: " + this.answer + "\n");
        }
    }
}

module.exports = Word;