const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return CHOICES[randomNumber];
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Rock, paper or scissors?");
        choice = choice ? choice.toLowerCase() : "invalid";
    } while (!CHOICES.includes(choice));
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw!");
        } else if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }

    while (round < 5) {
        console.log(`Round ${++round}!`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(
            `Game won!  Human:${humanScore} - ${computerScore}:Computer`
        );
    } else if (computerScore > humanScore) {
        console.log(
            `Game lost! Human:${humanScore} - ${computerScore}:Computer`
        );
    } else {
        console.log(`Draw! Human:${humanScore} - ${computerScore}:Computer`);
    }
}

playGame();
