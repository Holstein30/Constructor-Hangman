var inquire = require("inquirer");
var Word = require("./word.js");
var playGame = require("./game.js");

console.log("\nWelcome to Greatest Mountains Hangman!\n");

// Prompt to ask user if they want to play 

inquire.prompt([{
    type: "confirm",
    message: "Are you ready to play?",
    name: "play"
}]).then(function (answers) {
    if (answers.play) {
        console.log("\nYou have 10 guesses! Good Luck!\n");
        wordsArray = new Word();
        // console.log(wordsArray);
        wordsArray.passLetters();
        playGame();
    } else {
        console.log("Come back when you're ready");
    }
});