var inquire = require("inquirer");
var Word = require("./word.js");

// Prompt user to guess a letter

function playGame() {
    inquire.prompt([{
        type: "input",
        message: "\n\nGuess a letter: ",
        name: "guess"
    }]).then(function (answers) {
        // console.log(answers.guess);
        wordsArray.check(answers.guess.toUpperCase());
    });
}

module.exports = playGame;