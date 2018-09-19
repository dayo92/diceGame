//create a variable set it to zero
var score = 0;
let randomNumber = 0;
//target the button, when it's clicked, the dice image changes and add to score
const roll = document.getElementById('btn');
const dice = document.getElementById('dice');
const reset = document.getElementById('reset');
const sco = document.getElementById('sco');
const player = document.getElementById('player')

document.getElementById('btn').addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    dice.style.visibility = 'visible';
    dice.src = 'img/dice' + randomNumber + '.png';

    if(randomNumber !== 1) {
        score = score + randomNumber;
        sco.textContent = score;
        check()
    }

    if(randomNumber === 1){
        score = 0;
        sco.textContent = '0'
    }
})

//detect winner

const check = () => {
    if ( score >= 21) {
        player.textContent = 'winner';
        sco.style.visibility = 'hidden'
        roll.style.visibility = 'hidden';
        // dice.style.visibility = 'hidden'
    }
}

//reset game

reset.addEventListener('click', () => {
    score = 0;
    dice.style.visibility = 'hidden';
    roll.style.visibility = 'visible';
    player.textContent = 'PLAYER SCORE:';
    sco.textContent = "";
    sco.style.visibility = 'visible'
});