function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}
