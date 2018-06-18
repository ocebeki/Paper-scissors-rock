// -----------------------------computer choice
let AI = function () {

    let x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        computerChoose = "scissors"
    } else if (x == 2) {
        computerChoose = "paper"
    } else {
        computerChoose = "rock"
    }

};

// ------------------------------------------user choice
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', function () {
    userChoice = "scissors";
    AI()
})
let paper = document.getElementById('paper');
paper.addEventListener('click', function () {
    userChoice = "paper"
    AI()

})
let rock = document.getElementById('rock');
rock.addEventListener('click', function () {
        userChoice = "rock"
        AI()

    })
    // --------------------------   game stats
let userChoice = "";
let userScores = 0;

let userName = prompt('User name');

let getUserScores = document.getElementById('userScores');
getUserScores.innerHTML = userName + ": " + userScores++;
getUserScores.style.fontSize = "25px";


let computerChoose = "";
let computerScores = 0;

let getComputerScores = document.getElementById('computerScores');
getComputerScores.innerHTML = "Comp: " + computerScores++;
getComputerScores.style.fontSize = "25px";

let message = document.getElementById('message');
let message2 = document.getElementById('message2');
message.style.fontSize = "20px";
message2.style.fontSize = "20px";

//------------------------------   gameOver

let gameOver = document.getElementById('gameOver');
let gameOverContent = document.getElementById('gameOverStatus');
let tryAgain = document.getElementById('playAgain').addEventListener('click', function () {
    location.reload();
});

// ------------------------ compare choices
const compare = function (choice1, choice2) {

    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            getUserScores.innerHTML = userName + ": " + userScores++;
            message.innerHTML = "Scissors cut the paper!"
            message2.innerHTML = "Win!"
        } else if (choice2 === "rock") {
            getComputerScores.innerHTML = "Comp: " + computerScores++;
            message.innerHTML = "Rock destroy scissors!"
            message2.innerHTML = "Lose!"
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            getUserScores.innerHTML = userName + ": " + userScores++;
            message.innerHTML = "Paper cover the rock!"
            message2.innerHTML = "Win!"
        } else if (choice2 === "scissors") {
            getComputerScores.innerHTML = "Comp: " + computerScores++;
            message.innerHTML = "Scissors cut the paper!"
            message2.innerHTML = "Lose!"
        }
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            getUserScores.innerHTML = userName + ": " + userScores++;
            message.innerHTML = "Rock destroy scissors!"
            message2.innerHTML = "Win!"
        } else if (choice2 === "paper") {
            getComputerScores.innerHTML = "Comp: " + computerScores++;
            message.innerHTML = "Paper cover the rock!"
            message2.innerHTML = "Lose!"
        }
    }
    if (userScores > 5) {
        gameOver.style.display = "block";
        gameOverContent.innerHTML = "YOU WON!!!";
    }
    if (computerScores > 5) {
        gameOver.style.display = "block"
        gameOverContent.innerHTML = "YOU LOSE!!!"
        
    } else if (choice1 === choice2) {
        message2.innerHTML = "Draw!"
    }
}


let initCompare = document.querySelectorAll('.card').forEach(function (init) {
    init.addEventListener('click', function () {
        compare(userChoice, computerChoose)
    });
});
