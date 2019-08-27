
    

    
    var library = ["Alpha","Beta","C","Delta"];
    const lives = 7;
    var guessedLetters = [];
    var currentWordIndex;
    var thisWord = [];
    var remainingGuesses = 0;
    var start = false;
    var finish = false;

    function newGame() {

        remainingGuesses = lives;
        start = false;

        currentWordIndex = Math.floor(Math.random() * (library.length));
    
        guessedLetters = [];
        thisWord = [];

        document.getElementById("title-image").src = "";

        for (var i = 0; i < library[currentWordIndex].length; i++) {
            thisWord.push("_");
        }

        document.getElementById("tryAgain").style.cssText = "display: none";
        document.getElementById("gameover-image").style.cssText = "display: none";
        document.getElementById("youwin-image").style.cssText = "display: none";

            updateDisplay();
    };

    function updateDisplay() {

        document.getElementById("currentWord").innerText = "";
        for (var i = 0; i < thisWord.length; i++) {
            document.getElementById("thisWord").innerText += thisWord[i];
        }
        document.getElementById("remainingGuesses").innerText = remainingGuesses;
        document.getElementById("guessedLetters").innerText = guessedLetters;
        if(remainingGuesses <= 0) {
            document.getElementById("gameover-image").style.cssText = "display: block";
            document.getElementById("tryAgain").style.cssText = "display: block";
            finish = true
        }
    };

    function updateImage() {
        document.getElementById("livesImage").src = "assets/images/" + (lives - remainingGuesses) + ".png";
    }
    

    document.onkeydown = function(event) {
        if(finish) {
            newGame();
            finish = false;
        } else {
            if(event.keyCode >= 65 && event.keyCode <= 90) {
                makeGuess(event.key.toLowerCase());
            }
        }
    };

    function makeGuess(letter) {
        if (remainingGuesses > 0) {
            if (!start) {
                start = true;
            }
            if (guessedLetters.indexOf(letter) === -1) {
                guessedLetters.push(letter);
                evaluateGuess(letter);
            }
        }

        updateDisplay();
        checkWin();
    };

    function evaluateGuess(letter) {
        var positions = [];

        for (var i = 0; i < library[currentWordIndex].length; i++) {
            if(library[currentWordIndex][i] === letter) {
                positions.push(i);
            }
        }
    
        if (positions.length <= 0) {
            remainingGuesses--;
            updateHangmanImage();
        } else {

            for (var i=0; i < positions.length; i++) {
                thisWord[positions[i]] = letter;
            }
        }
    
    
    };

    function checkWin() {
        if(thisWord.indexof("_") === -1 {
            document.getElementById("youwin-image").style.cssText = "display: block";
            document.getElementById("tryAgain").style.cssText = "display: block";
            wins++;
            finish = true;
        }

    
};
        