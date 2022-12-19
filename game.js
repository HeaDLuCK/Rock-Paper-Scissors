// ‘Rock’, ‘Paper’ or ‘Scissors’ 
const numberGap = (10 / 3).toFixed(2)
function getComputerChoice() {
    let randomNumber = (Math.random() * 10).toFixed(2)
    if (randomNumber < numberGap) {
        return 'Rock'
    } else if (randomNumber > numberGap * 2) {
        return 'Scissors'
    } else {
        return 'Paper'
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection =playerSelection[0].toUpperCase()+ playerSelection.slice(1).toLowerCase()
    computerSelection = computerSelection[0].toUpperCase()+computerSelection.slice(1).toLowerCase()
    if (playerSelection === computerSelection) {
        return 'Tie :p'
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
