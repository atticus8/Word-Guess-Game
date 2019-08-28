var letters = ["a", "b", "c", "d", "e", "f", "g",];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;

// This is what we'll use to count down
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

/*
var functionName = function(){
    do something;
}
*/

//updates guessesLeft
var updateRemainingGuesses = function(){

    document.querySelector("#remainingGuesses").innerHTML = guessesLeft;
};


//gets computer's letter
var updateLetterGuessed = function(){
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    
};

var guessesSoFarUpdate = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
    
};



//calling functions on page load
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateRemainingGuesses();
    updateLetterGuessed();
    guessesSoFarUpdate();
    console.log(letterToGuess);
};


updateRemainingGuesses();
updateLetterGuessed();

document.onkeyup = function (event) {

    guessesLeft--;

    var letter = event.key.toLowerCase();
    guessedLetters.push(letter);
    updateRemainingGuesses();
    guessesSoFarUpdate();



if(letter === letterToGuess){
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
}

if(guessesLeft === 0){
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
}

};
