var userGuessed = [];

var computerGuesses = null;

var win = 0;
var losses = 0;

var remaningGuesses = 9;

var letters = ["a","b","c","d","e","f"];

var computerGuessed = function(){ 
  computerGuesses =  letters[Math.floor(Math.random() * letters.length)];
};


var remaningGuessesSoFar = function() {
    
    document.querySelector("#remaning-guesses").innerHTML = remaningGuesses;
};

var userInputSoFar = function() {
    document.getElementById("#guessed-letters") = userGuessed.join(",");
};


var reset = function(){
    var remaningGuesses = 9;
    var userGuessed = [];
    computerGuessed();
    userInputSoFar(); 
    remaningGuessesSoFar();  
};

remaningGuessesSoFar();
computerGuessesSoFar();

document.onkeydown = function(e){

    remaningGuesses--;

    var input = event.key.toLowerCase();
    userGuessed.push(input);

    remaningGuessesSoFar();
    computerGuessesSoFar();

    if(input === computerGuesses){
        wins++;
        document.getElementById("wins") = wins;

        reset();
    }

    else if(remaningGuesses === 0){
        losses++;
        document.getElementById("losses") = losses;

        reset();
    }

};

