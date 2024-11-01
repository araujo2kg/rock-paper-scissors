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
