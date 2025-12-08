function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let message = "";
    let finalMessage = "";
    round = 0;

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

    function getHumanChoice() {
        return prompt("Input one of 'rock', 'paper', 'scissors':").toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === "rock" && computerChoice === "scissors"
         || humanChoice === "paper" && computerChoice === "rock"
         || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            message = `Ỳou win this round! ${humanChoice} beats ${computerChoice}!`;
            humanScore += 1;
        } else {
            message = `The computer wins this round... ${computerChoice} beats ${humanChoice}.`;
            computerScore += 1;
        }
    }

    while(humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! ${humanChoice} vs. ${computerChoice}.\nRepeating the current round...`);
        } else {
            playRound(humanChoice, computerChoice);
            console.log(`${message}\nHuman score: ${humanScore}\nComputer score: ${computerScore}`);
        }
    }

    finalMessage = humanScore > computerScore ?
        `Congratulations, you have won the game! The final score was:\nHuman score: ${humanScore}\nComputer score: ${computerScore}` :
        `Unfortunately you have lost the game :( The final score was:\nHuman score: ${humanScore}\nComputer score: ${computerScore}`
    console.log(finalMessage);
}

playGame();