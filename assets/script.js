const gameBlock = document.querySelector(".game__block");
const gameResult = document.querySelector(".game__result");
const scoreNumber = document.querySelector(".game__header--score--number");
// const storedScore = localStorage.getItem("userScore");
const rulesBtn = document.getElementById("game__rules--button");
const closeBtn = document.querySelector(".modal__rules__title");
const modal = document.querySelector(".game__rules--modal");
const gamePick = document.querySelector(".game__block__pick");
const playerPick = document.querySelector('.game__block__pick--player');
const compPick = document.querySelector('.game__block__pick--comp');
let selected;
let randCompPick;
const possibleOptions = document.querySelectorAll('[data-name]');
const gamePickResult = document.querySelector(".game__block__pick__result");
const playAgainButton = document.querySelector('.game__block__pick__result__button')
const resetBtn = document.querySelector('.reset__button')
startScore();

possibleOptions.forEach((choice) =>
choice.addEventListener("click", (event) => {
    gameBlock.classList.remove("active");
    gamePick.classList.add("active");
    playerChoice(event.target)
    setTimeout(function(){computerPick()}, 1000);
    
    selected=choice.dataset.name
    getWinner()
})
);

const playerChoice = (el) => {
    return playerPick.appendChild(el)
}

compChoice = possibleOptions[getRandom(3)]
randCompPick = compChoice.id


const computerPick = () => {
    return compPick.appendChild(compChoice);
}


function getRandom(n) {
    let l = Math.floor(Math.random() * n);
    return l;
}



const getWinner = () => {
    if (selected == randCompPick) {
        gameResult.innerHTML = "DRAWN";
    } else if (selected == "paper" && randCompPick == "scissors") {
        addScore(-1);
        gameResult.innerHTML = "YOU LOSE";
    } else if (selected == "scissors" && randCompPick == "paper") {
        addScore(1);
        gameResult.innerHTML = "YOU WIN";
    } else if (selected == "scissors" && randCompPick == "rock") {
        addScore(-1);
        gameResult.innerHTML = "YOU LOSE";
    } else if (selected == "rock" && randCompPick == "scissors") {
        addScore(1);
        gameResult.innerHTML = "YOU WIN";
    } else if (selected == "rock" && randCompPick == "paper") {
        addScore(-1);
        gameResult.innerHTML = "YOU LOSE";
    } else if (selected == "paper" && randCompPick == "rock") {
        addScore(1);
        gameResult.innerHTML = "YOU WIN";
    }
}

getWinner()

setTimeout(()=>{
    gamePickResult.classList.add('active')
},3000);


/*-----Local storage----*/


function startScore() {
    if (localStorage.score == undefined) {
        localStorage.score = 0;
    } else {
        scoreNumber.textContent = localStorage.score;
    }
}

function addScore(n) {
    let tempScore = parseInt(localStorage.score);
    tempScore = tempScore + n;
    localStorage.score = tempScore;
    scoreNumber.textContent = localStorage.score;
}


/*---Resets the game---*/

const playAgain = () => {
    location.reload();
}

playAgainButton.addEventListener('click', playAgain);

/*------Modal window-----*/

const modalHandler = () => {
    modal.classList.toggle("show");
};
rulesBtn.addEventListener("click", modalHandler);
closeBtn.addEventListener("click", modalHandler);
