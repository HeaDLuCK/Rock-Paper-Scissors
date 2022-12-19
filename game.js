// ‘Rock’, ‘Paper’ or ‘Scissors’ 
const numberGap=(10/3).toFixed(2)
function getComputerChoice(){
    let randomNumber=(Math.random()*10).toFixed(2)
    if (randomNumber< numberGap){
        return 'Rock'
    }else if(randomNumber> numberGap*2){
        return 'Scissors'
    }else{
        return 'Paper'
    }

}

console.log(getComputerChoice());
