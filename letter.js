// Letter constructor for letters of answer
var blanks = [];

function Letter(letter) {
    this.letter = letter;
    this.show = false;
    this.showLetter = function () {
        if (this.show) {
            process.stdout.write(this.letter);
        } else {
            process.stdout.write(" __ ");
        }
    };
}


module.exports = Letter;