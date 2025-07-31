function getComputerChoice() {
    /*
    Function to randomly generate move computer will play
    */
    //generate random integer between 0 and 2
    let randInt = Math.floor(Math.random() * 3);
    //Declare variable to store choice
    let choice;
    //make computer move choice based on generated number
    switch(randInt) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    //return computer choice
    return choice;
}

function playRound(humanChoice, computerChoice) {
    /*
    Function to carry out a round of the game
    */
   //make user input case insensitive
   humanChoice = humanChoice.toLowerCase();

   let result = document.querySelector('#result');

   //decide winner based on given moves
    if (humanChoice === computerChoice) {
        roundCount--;
        result.textContent = `It's a Draw!  Score: Player ${humanScore} - ${computerScore} Computer`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result.textContent = `Round won! ${humanChoice} beats ${computerChoice}. Score: Player ${humanScore} - ${computerScore} Computer`;
    } else {
        computerScore++;
        result.textContent = `Round lost! ${humanChoice} loses to ${computerChoice}. Score: Player ${humanScore} - ${computerScore} Computer`;
    }

}

function endGame() {
    /*
    Function to output winner of the game
    */

    let result = document.querySelector('#result');
    //output message to declare overall winner
    if (humanScore > computerScore) {
        result.textContent = `Game over: Player wins! Score: Player ${humanScore} - ${computerScore} Computer`;
    } else if (computerScore > humanScore) {
        result.textContent = `Game over: Computer wins! Score: Player ${humanScore} - ${computerScore} Computer`;
    } else {
        result.textContent = `Game over: It's a draw! Score: Player ${humanScore} - ${computerScore} Computer`;
    }
}
//get all button references
let buttons = document.querySelectorAll('button');
//for each button press, trigger game played with given move
buttons.forEach(button => {button.addEventListener('click', () => {
    if (roundCount < 5) {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        roundCount++;
    }

    if (roundCount === 5) {
        endGame();
    }
})});

//initialise scores to 0
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;