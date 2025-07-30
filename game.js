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

function getHumanChoice() {
    /*
    Function to get move the human will play
    */
   //get user input
    let choice = prompt("Please enter your choice: rock, paper or scissors");
    //return user choice
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
        humanScore++;
        computerScore++;
        result.textContent = `It's a Draw!  Score: Player ${humanScore} - ${computerScore} Computer`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result.textContent = `Round won! ${humanChoice} beats ${computerChoice}. Score: Player ${humanScore} - ${computerScore} Computer`;
    } else {
        computerScore++;
        result.textContent = `Round lost! ${humanChoice} loses to ${computerChoice}. Score: Player ${humanScore} - ${computerScore} Computer`;
    }

}

function playGame() {
    /*
    Function to play whole game
    */
    /*
    //execute five rounds of the game
    for (let i = 0; i < 5; i++) {
        //get player moves
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        //carry out round of game
        playRound(humanSelection, computerSelection);
    }

    //output message to declare overall winner
    if (humanScore > computerScore) {
        console.log("Game over: Player wins!");
    } else if (computerScore > humanScore) {
        console.log("Game over: Computer wins!");
    } else {
        console.log("Game over: It's a draw!");
    }
    */
}
//get all button references
let buttons = document.querySelectorAll('button');
//for each button press, trigger game played with given move
buttons.forEach(button => {button.addEventListener('click', playRound(button.id))});

//initialise scores to 0
let humanScore = 0;
let computerScore = 0;
//Start game
//playGame();