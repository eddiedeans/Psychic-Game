var wins = 0;
var losses = 0;
var guessLeft = 9;

var guessesSoFar = []; // array to hold users guessess

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'u', 'x', 'y', 'z']


document.onkeyup = function(event) {

    var userGuess = (event.key).toLowerCase(); // taking users guess

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guessesSoFar.push(userGuess);

    if (userGuess == computerGuess) {
        wins++;
        document.querySelector(".wins").innerHTML = "Wins: " + wins
        alert("You guessed it! You won!")
        guessLeft = 9;
        guessesSoFar.length = 0;
    }

    else if (userGuess !== computerGuess) {
        guessLeft--;
    }


    if (guessLeft === 0) {
        losses++;
        alert("You LOST!")
        guessLeft = 9;
        guessesSoFar.length = 0;
    }

    
    // guessesSoFar.toString();

    document.querySelector(".wins").innerHTML = "Wins: " + wins;

    document.querySelector(".losses").innerHTML = "Losses: " + losses;

    document.querySelector(".guessLeft").innerHTML = "Guesses Left: " + guessLeft;
    
    document.querySelector(".yourGuess").innerHTML = "Your Guesses so far: " + guessesSoFar;
}

