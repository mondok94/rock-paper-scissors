// Random computer selection
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerSelection;
    if (randomNumber < 33) {
        computerSelection = "rock"
    } else if (randomNumber >= 33 && randomNumber < 66) {
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    return computerSelection;
}

// Buttons
const ROCKBTN = document.querySelector('#rock');
const PAPERBTN = document.querySelector('#paper');
const SCISSORSBTN = document.querySelector('#scissors');
console.log(ROCKBTN, PAPERBTN, SCISSORSBTN);

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = 1; // Draw
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = 2; // Computer Wins
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = 2; // Computer Wins
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = 2; // Computer Wins
    } else {
        result = 3; // Player Wins
    }
    console.log(result);
    return result;
}

// Event Listener for each selection, returns result of playRound()
ROCKBTN.addEventListener('click', (e) => {
    playRound(e.target.id.toLowerCase(), computerPlay());
});
PAPERBTN.addEventListener('click', (e) => {
    playRound(e.target.id.toLowerCase(), computerPlay());
});
SCISSORSBTN.addEventListener('click', (e) => {
    playRound(e.target.id.toLowerCase(), computerPlay());
});

// Track winner


/* 
function game() {
    // Score variables
    let playerScore = 0;
    let computerScore = 0;



    // Result of each iteration increments score
    if (roundWinner == 1) {
        console.log("Draw! " + "round " + (i + 1) + " of 5.");
    } else if (roundWinner == 2) {
        ++computerScore;
        console.log("Computer Wins! " + "round " + (i + 1) + " of 5.");
    } else if (roundWinner == 3) {
        ++playerScore;
        console.log("You Win! " + "round " + (i + 1) + " of 5.");
    }

    // When for loops over, declare winner with highest score tally
    if (playerScore == computerScore) {
        console.log("IMPOSSIBLE! DRAW!!!!");
    } else if (playerScore > computerScore) {
        console.log("You won! Congratulations!");
    } else {
        console.log("Too bad! Computer Wins!");
    }
}

game(); */