// Function to output rock, paper or scissors at random
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

// Function to get user input
function getPlayerInput() {
    let playerInput = prompt("Choose paper, scissors or rock");
    // Convert input to lowercase
    let playerSelection = playerInput.toLowerCase();
    return playerSelection;
}

// Function that compares playerSelection to computerSelection and return a value for draw/win/lose
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
    return result;
}

// Function that simulates a 5 round game
function game() {
    // Score variables
    let playerScore = 0;
    let computerScore = 0;
    // 5 rounds of play
    for (let i = 0; i < 5; i++) {
        // for each round, player inputs selection
        let playerSelection = getPlayerInput();
        // get computer selection
        let computerSelection = computerPlay();
        // Error checking, print variables
        console.log("Player: " + playerSelection + ", " + "Computer: " + computerSelection);
        // Compete
        let roundWinner = playRound(playerSelection, computerSelection);

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

game();