var computerChoices = ["a","b","c"];
var wins = 0;
var losses = 0;
var userPressed = [];
var computerGuesses = null;
var guessesLeft = 9;

var userChoiceText = document.getElementById("userinput");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("numberofguess");

var updateGuessLeft = function(){
    document.getElementById("numberofguess") = guessesLeft

};

var computerGuessesX = function(){
    computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

var lettersGuessed = function(){

    document.getElementById("userinput") = userPressed.join(",");

};

function reset(){
    guessesLeft = 9;
    userPressed = [];
};




document.onkeydown = function(event){

    var userInput = event.key.toLowerCase();
    guessesLeft --;
    userPressed.push(userInput);


    if(userInput === computerGuesses){
        win ++;
        reset();
    };

    if(guessesLeft === 0){
        losses++;
        reset();
    };

    userChoiceText.textContent = userInput;
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;

};