// NPM packages

var inquire = require("inquirer");

// Set answers array and variables
var answers = ["test", "test2", "test3", "test4", "test5"];
var guessesLeft = 10;

function Word(answer) {
    this.answer = answer;
}

var letter = function (letter) {
    this.letter = letter;
    this.show = false;
    this.showLetter = function () {
        return !(this.show) ? "_" : this.letter;
    };
};

console.log("Welcome to ____ Hangman!");

inquire.prompt([{
    type: "confirm",
    message: "Are you ready to play?",
    name: "play"
}]).then(function (answers) {
    if (answers.play) {
        playGame();
    } else {
        console.log("Come back when you're ready");
    }
});

function playGame() {
    var randomNum = Math.floor(Math.random() * answers.length);
    var currentWord = new Word(answers[randomNum]);
    console.log(currentWord);
}

function isLetter() {

}

function gameOver() {

}

function restart() {

}