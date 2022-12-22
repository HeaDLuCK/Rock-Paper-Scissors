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
        console.log('Tie :p');
        return 0
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 1
    } else {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 2
    }
}
let container = document.createElement('div')
container.setAttribute('id', 'container');

for (let i = 0; i < 3; i++) {
    let smallContainer = document.createElement('div')
    smallContainer.classList.add('sm-container')
    container.appendChild(smallContainer);
}
let firstDiv = container.firstElementChild;
let lastDiv = container.lastElementChild;
let middleDiv = lastDiv.previousElementSibling;

firstDiv.classList.add('first')
middleDiv.classList.add('middle')
lastDiv.classList.add('special')

for (let i = 0; i < 2; i++) {
    let content = document.createElement('div')
    content.classList.add('content')
    firstDiv.appendChild(content);
}
firstDiv.firstElementChild.innerHTML = 'User'
firstDiv.lastElementChild.innerHTML = 'Computer'



for (let i = 0; i < 3; i++) {
    let btn = document.createElement('button')
    btn.classList.add('key')
    lastDiv.appendChild(btn);
}

lastDiv.firstElementChild.innerHTML = 'Rock'
lastDiv.lastElementChild.innerHTML = 'Paper'
lastDiv.lastElementChild.previousElementSibling.innerHTML = 'Scissors'

for (let i = 0; i < 2; i++) {
    let score = document.createElement('div')
    score.classList.add('score')
    middleDiv.appendChild(score);
}
let userScore = middleDiv.firstElementChild
let compScore = middleDiv.lastElementChild

userScore.textContent = 0
compScore.textContent = 0


document.body.prepend(container);


let btns = document.querySelectorAll('.key')



btns.forEach((elm) => {
    elm.addEventListener('click', () => {
        
        if (+userScore.textContent === 5 && +compScore.textContent === 5) {
            return alert('Tie :D');
        }
        else if (+userScore.textContent === 5) {

            return alert('the winner Is User');
        } else if (+compScore.textContent === 5) {

            return alert('the winner Is Computer');
        } else {
            let result = playRound(elm.textContent, getComputerChoice());
            if (result === 1) {
                userScore.textContent = +userScore.textContent + 1
            } else if (result === 2) {
                compScore.textContent = +compScore.textContent + 1
            } else {
                compScore.textContent = +compScore.textContent + 1;
                userScore.textContent = +userScore.textContent + 1;
            }
        }




    })
})




// function game(rounds) {
//     let computerWins = null
//     let playerWins = null
//     for (let i = 0; i < rounds; i++) {
//         let playerSelection = prompt('choose Rock or paper or scissors :')
//         let check = true
//         do {
//             playerSelection = playerSelection.toLowerCase()
//             if (playerSelection === 'paper'
//                 || playerSelection === 'rock'
//                 || playerSelection === 'scissors') {
//                 check = false
//             } else { playerSelection = prompt('choose Rock or paper or scissors :') }
//         }
//         while (check)
//         let result = playRound(playerSelection, getComputerChoice())
//         if (result===0) {
//             computerWins += 1
//             playerWins += 1
//         } else if (result===1) {
//             playerWins += 1
//         } else {
//             computerWins += 1
//         }

//     }
//     if (computerWins === playerWins) {
//         return 'Player tied with ' + playerWins + ' versus Computer with ' + computerWins
//     }
//     else if (computerWins > playerWins) {
//         return 'Computer win with ' + computerWins + ' versus Player with ' + playerWins
//     } else {
//         return 'Player win with ' + playerWins + ' versus Computer with ' + computerWins
//     }
// }
// const rounds=+prompt('How many rounds you wanna play ?')
// console.log(game(rounds)); 