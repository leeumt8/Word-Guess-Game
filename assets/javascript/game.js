var games  = ["CIVILIZATION", "COUNTERSTRIKE", "FABLE", "FIFA", "GEOMETRYWARS", "HALO", "WORLDOFWARCRAFT"];


var maxGuesses = 10;
var remainingGuesses = 0;
var wins = 0;
var losses = 0;
var currentGame;
var guessedLetters = [];
var currentGameArray = [];
var gameOver = false;


function start() {
    currentGame = games[Math.floor(Math.random() * games.length)];

    console.log(currentGame);
    
    currentGameArray = [];

    for (var i=0; i < currentGame.length; i++) {
        currentGameArray[i] = "_";
    }

    remainingGuesses = maxGuesses;
    guessedLetters = [];

    document.getElementById("winImage").src = "";

    dataPush();
};


function dataPush() {
    document.getElementById("winNumber").innerText = wins;
    document.getElementById("lossNumber").innerText = losses;
    document.getElementById("remGuesses").innerText = remainingGuesses;
    document.getElementById("wordCurrent").innerText = currentGameArray.join(" ");
    document.getElementById("guessedLettrs").innerText = guessedLetters;
};

function letterCheck(letter) {
    if  (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        if (currentGame.indexOf(letter) === -1) {
            remainingGuesses--;
        }
    } else {
        for (var i = 0; i < currentGame.length; i++) {
            if (letter === currentGame[i]) {
                currentGameArray[i] = letter;
            }
        }
    }
};

function winner() {
    if (currentGameArray.indexOf("_") === -1) {
        wins++;
        gameOver = true;
        if (currentGame === "CIVILIZATION") {
            document.getElementById("winImage").src = "assets/images/civ.jpeg";
        } else if (currentGame === "COUNTERSTRIKE") {
            document.getElementById("winImage").src = "assets/images/csgo.jpg"; 
        } else if (currentGame === "FABLE") {
            document.getElementById("winImage").src = "assets/images/fable.jpg"; 
        } else if (currentGame === "FIFA") {
            document.getElementById("winImage").src = "assets/images/fifa.png"; 
        } else if (currentGame === "GEOMETRYWARS") {
            document.getElementById("winImage").src = "assets/images/geowars.png"; 
        } else if (currentGame === "HALO") {
            document.getElementById("winImage").src = "assets/images/halo.png"; 
        } else if (currentGame === "WORLDOFWARCRAFT") {
            document.getElementById("winImage").src = "assets/images/wow.jpg"; 
        } 
        
    }
};

function loser() {
    if(remainingGuesses <= 0) {
        losses++;
        gameOver = true;
        document.getElementById("winImage").src = "assets/images/loser.jpeg";
    }
};

document.onkeyup = function(event) {
    if (gameOver) {
        start();
        gameOver = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            letterCheck(event.key.toUpperCase());
            dataPush();
            winner();
            loser();
        }
    }
};

start();
dataPush();
