// -----------------------------computer choice
let AI = function () {

    let x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        computerChoose = "Scissors"
    } else if (x == 2) {
        computerChoose = "Paper"
    } else {
        computerChoose = "Rock"
    }

};


// ------------------------------------------user choice
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', function () {
    userChoice = "Scissors";
    AI()
})
let paper = document.getElementById('paper');
paper.addEventListener('click', function () {
    userChoice = "Paper"
    AI()

})
let rock = document.getElementById('rock');
rock.addEventListener('click', function () {
        userChoice = "Rock"
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
let getComputerChoose = document.getElementById('computerChoose');
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

    if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
            getUserScores.innerHTML = userName + ": " + userScores++;
            message.innerHTML = "Scissors cut the paper!"
            message2.innerHTML = "Win!"
            getComputerChoose.innerHTML ="Computer chosed " + computerChoose
        } else if (choice2 === "Rock") {
            getComputerScores.innerHTML = "Comp: " + computerScores++;
            message.innerHTML = "Rock destroy scissors!"
            message2.innerHTML = "Lose!"
            getComputerChoose.innerHTML ="Computer chosed " + computerChoose
        }
    }
    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            getUserScores.innerHTML = userName + ": " + userScores++;
            message.innerHTML = "Paper cover the rock!"
            message2.innerHTML = "Win!"
            getComputerChoose.innerHTML ="Computer chosed " + computerChoose
        } else if (choice2 === "Scissors") {
            getComputerScores.innerHTML = "Comp: " + computerScores++;
            message.innerHTML = "Scissors cut the paper!"
            message2.innerHTML = "Lose!"
            getComputerChoose.innerHTML ="Computer chosed " + computerChoose
        }
    }
    if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            getUserScores.innerHTML = userName + ": " + userScores++;
            message.innerHTML = "Rock destroy scissors!"
            message2.innerHTML = "Win!"
            getComputerChoose.innerHTML = "Computer chosed " + computerChoose
        } else if (choice2 === "Paper") {
            getComputerScores.innerHTML = "Comp: " + computerScores++;
            message.innerHTML = "Paper cover the rock!"
            message2.innerHTML = "Lose!"
            getComputerChoose.innerHTML = "Computer chosed " + computerChoose
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
