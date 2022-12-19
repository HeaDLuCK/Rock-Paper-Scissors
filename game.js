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
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()
    if (playerSelection === computerSelection) {
        // return 'Tie :p'
        return 0
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        // return 'You win! ' + playerSelection + ' beats ' + computerSelection
        return 1
    } else {
        // return 'You lose! ' + computerSelection + ' beats ' + playerSelection
        return 2
    }
}

function game(rounds) {
    let computerWins = null
    let playerWins = null
    for (let i = 0; i < rounds; i++) {
        let playerSelection = prompt('choose Rock or paper or scissors :')
        let check = true
        do {
            playerSelection = playerSelection.toLowerCase()
            if (playerSelection === 'paper'
                || playerSelection === 'rock'
                || playerSelection === 'scissors') {
                check = false
            } else { playerSelection = prompt('choose Rock or paper or scissors :') }
        }
        while (check)
        let result = playRound(playerSelection, getComputerChoice())
        if (result===0) {
            computerWins += 1
            playerWins += 1
        } else if (result===1) {
            playerWins += 1
        } else {
            computerWins += 1
        }

    }
    if (computerWins === playerWins) {
        return 'Player tied with ' + playerWins + ' versus Computer with ' + computerWins
    }
    else if (computerWins > playerWins) {
        return 'Computer win with ' + computerWins + ' versus Player with ' + playerWins
    } else {
        return 'Player win with ' + playerWins + ' versus Computer with ' + computerWins
    }
}
const rounds=+prompt('How many rounds you wanna play ?')
console.log(game(rounds)); 