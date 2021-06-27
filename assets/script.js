const gameBlock = document.querySelector('.game__block--wrapper');
const gameResult = document.querySelector('.game__result');
const scoreNumber = document.querySelector('.game__header--score--number');
const storedScore = localStorage.getItem("userScore");
let userScore;

window.onload = () => {
    if (localStorage.userScore) {
        userScore = storedScore;
    } else {
        userScore = 0;
    }
    updateScore();
}

function updateScore() {
    scoreNumber.innerHTML = `<p>${userScore}</p>`;
}

const saveToLocalStorage = () => {
    localStorage.setItem("userScore", userScore);
}

gameBlock.addEventListener('click', event => {
    if (event.target.className === 'game__block--choice') {
        getWinner(event.target.id);
    }
});

function compPick() {
    possibleOptions = ['rock', 'paper', 'scissors'];
    randomIndex = Math.floor(Math.random() * possibleOptions.length);
    return possibleOptions[randomIndex];
}

function getWinner(playerPick) {
    removeAllChoices();
    let computerPick = compPick();
    displayCurrentChoices(playerPick, computerPick);
    switch (playerPick) {
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

function displayCurrentChoices(playerPick, computerPick) {
    let playerChoice = document.getElementById(playerPick);
    let computerChoice = document.getElementById(computerPick);
    playerChoice.style.display = 'block';
    computerChoice.style.display = 'block';
}

function removeAllChoices() {
    buttonElements = document.getElementsByClassName("game__block--choice");
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].style.display = 'none';
    }
}

function win() {
    userScore++;
    saveToLocalStorage();
    updateScore();
    gameResult.innerHTML = 
    `<h1>YOU WON</h1>
    <button id="play-again">Play Again</button>`;
    const playAgainButton = document.querySelector('#play-again');
    playAgainButton.addEventListener('click', () => {
        location.reload();
    });
}

function lose() {
    if (userScore > 0) {
        userScore--;
    } else {
        useScore = 0;
    }
    saveToLocalStorage();
    updateScore();
    gameResult.innerHTML = 
    `<h1>YOU LOST</h1>
    <button id="play-again">Play Again</button>`;
    const playAgainButton = document.querySelector('#play-again');
    playAgainButton.addEventListener('click', () => {
        location.reload();
    });
}

function draw() {
    gameResult.innerHTML = 
    `<h1>IT'S A DRAW</h1>
    <button id="play-again">Play Again</button>`;
    const playAgainButton = document.querySelector('#play-again');
    playAgainButton.addEventListener('click', () => {
        location.reload();
    });
}

/*------Modal window-----*/
function toggle_modal(){
    document.getElementById("modal-rules").classList.toggle("show");
}
  
document.getElementById("rule-button").onclick = function() {toggle_modal()};
document.getElementById("close__button").onclick = function() {toggle_modal()};