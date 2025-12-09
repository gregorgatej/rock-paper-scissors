let humanScore = 0;
let computerScore = 0;
let message = "";

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperBtn.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsBtn.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

function getComputerChoice() {
    random_nr = Math.floor(Math.random() * 3) + 1;
    switch (random_nr) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        message = `It's a tie! ${humanChoice} vs. ${computerChoice}.
                   \nTry again...`;
    } else {
        if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            humanScore += 1;
            message = `Ỳou win this round! ${humanChoice} beats ${computerChoice}! Current score:
                           \nHuman score: ${humanScore}\nComputer score: ${computerScore}`;
        } else {
            computerScore += 1;
            message = `The computer wins this round... ${computerChoice} beats ${humanChoice}. Current score:
                           \nHuman score: ${humanScore}\nComputer score: ${computerScore}`;
        }
    }
    if (humanScore === 5 || computerScore === 5) {
        message = humanScore > computerScore ?
            `Congratulations, you have won this round (${humanChoice} beats ${computerChoice}) and the game! The final score was:
             \nHuman score: ${humanScore}\nComputer score: ${computerScore}` :
            `Unfortunately you have lost this round (${computerChoice} beats ${humanChoice}) and the game :( The final score was:
             \nHuman score: ${humanScore}\nComputer score: ${computerScore}`
    }
    console.log(message);
}