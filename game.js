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

   if (humanChoice === computerChoice) {
    console.log("It's a Draw!")
   } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
   } else {
    console.log(`You lose! ${humanChoice} loses to ${computerChoice}`);
    computerScore++;
   }

}

//Main program

//initialise scores to 0
let humanScore = 0;
let computerScore = 0;

//get player moves
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//carry out round of game
playRound(humanSelection, computerSelection);
