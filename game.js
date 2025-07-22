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

//Main program
console.log(getComputerChoice());
console.log(getHumanChoice());
