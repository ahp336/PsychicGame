console.log("linked");

var computerChoices = ["a","b","c","d","e"];
var wins = 0;
var losses = 0;
var userPressed = [];
var computerGuesses = null;
var guessesLeft = 11;

var userChoiceText = document.getElementById("userinput");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("numberofguess");

var updateGuessLeft = function(){
    document.getElementById("numberofguess") = guessesLeft;

};

var computerGuessesX = function(){
    computerGuesses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuesses);
};

var lettersGuessed = function(){

    document.getElementById("userinput").innerHTML = userPressed;

};

function reset(){
    guessesLeft = 11;
    userPressed = [];
    computerGuessesX();
    updateGuessLeft();
    lettersGuessed()
};

computerGuessesX();
lettersGuessed();




document.onkeydown = function(event){

    var userInput = event.key.toLowerCase();
    userPressed.push(userInput);
    guessesLeft --;
    


    if(userInput === computerGuesses){
        wins ++;
        reset();
    };

     if(guessesLeft === 0){
        losses++;
        reset();
    };

    userChoiceText.textContent = userPressed.join(" ");
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;

};