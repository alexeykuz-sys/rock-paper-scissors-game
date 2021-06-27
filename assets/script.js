const gameBlock = document.querySelector('.game__block');
const gameResult = document.querySelector('.game__result');
let userScore = 0;

gameBlock.addEventListener('click', event => {
    if (event.target.className === 'game__choice') {
        getWinner(event.target.id);
    }
});

function compPick() {
    possibleOptions = ['rock', 'paper', 'scissors'];
    randomIndex = Math.floor(Math.random() * possibleOptions.length);
    return possibleOptions[randomIndex];
}

function getWinner(target) {
    let computerPick = compPick();
    switch (target) {
        case 'paper':
            if (computerPick === 'rock') {
                win();
            } else if (computerPick === 'scissors') {
                lose();
            } else {
                draw();
            }
            break;
        case 'rock':
            if (computerPick === 'scissors') {
                win();
            } else if (computerPick === 'paper') {
                lose();
            } else {
                draw();
            }
            break;
        case 'scissors':
            if (computerPick === 'paper') {
                win();
            } else if (computerPick === 'rock') {
                lose();
            } else {
                draw();
            }
            break;
        default:
            alert("There's a problem");
    }
}

function win() {
    userScore++;
    gameResult.innerHTML = 
    `<h1>YOU WON</h1>
    <button>Play Again</button>`;
}

function lose() {
    if (userScore > 0) {
        userScore--;
    } else {
        useScore = 0;
    }
    gameResult.innerHTML = 
    `<h1>YOU LOST</h1>
    <button>Play Again</button>`;
}

function draw() {
    gameResult.innerHTML = 
    `<h1>IT'S A DRAW</h1>
    <button>Play Again</button>`;
}
