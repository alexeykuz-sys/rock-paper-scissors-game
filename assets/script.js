const gameBlock = document.querySelector(".game__block");
const gameResult = document.querySelector(".game__result");
const scoreNumber = document.querySelector(".game__header--score--number");
const rulesBtn = document.getElementById("game__rules--button");
const closeBtn = document.querySelector(".modal__rules__title");
const modal = document.querySelector(".game__rules--modal");
const gamePick = document.querySelector(".game__block__pick");
const playerPick = document.querySelector('.game__block__pick--player');
let compPick = document.querySelector('.game__block__pick--comp');
let selected;
let randCompPick;
const possibleOptions = document.querySelectorAll('[data-name]');
const gamePickResult = document.querySelector(".game__block__pick__result");
const playAgainButton = document.querySelector('.game__block__pick__result__button');
const userImage = document.getElementById('userImg');
const compImage = document.getElementById('compImg');

startScore();

possibleOptions.forEach((choice) =>
choice.addEventListener("click", (event) => {
    gameBlock.classList.remove("active");
    gamePick.classList.add("active");
    playerChoice(event.target);
    computerPick(event.target);
    selected=choice.dataset.name;
    getWinner();
})
);

const playerChoice = (el) => {
    userImage.src = `./images/icon-${el.id}.svg`;
    userImage.className.replace(`${el.id}`);    
};

let compChoice = possibleOptions[getRandom(3)];
randCompPick = compChoice.id;


const computerPick = (el) => {
    console.log(compChoice.id);
    compImage.src = `./images/icon-${compChoice.id}.svg`;
    compImage.className.replace(`${el.id}`);
    
}


function getRandom(n) {
    let l = Math.floor(Math.random() * n);
    return l;
}



const getWinner = () => {
    if (selected == randCompPick) {
        setTimeout(() =>{
        gameResult.innerHTML = "DRAW";
        gamePickResult.classList.add('active');
        },1500);
    } else if (selected == "paper" && randCompPick == "scissors") {
        setTimeout(()=>{
            addScore(-1);  
            gamePickResult.classList.add('active');
        }, 1500);
        gameResult.innerHTML = "YOU LOSE";
        compPick.classList.add('effect');
    } else if (selected == "scissors" && randCompPick == "paper") {
        setTimeout(()=>{
            addScore(1);
            gamePickResult.classList.add('active');  
        }, 1500);
        gameResult.innerHTML = "YOU WIN";
        playerPick.classList.add('effect');
    } else if (selected == "scissors" && randCompPick == "rock") {
        setTimeout(()=>{
            addScore(-1);
            gamePickResult.classList.add('active'); 
        }, 1500);
        gameResult.innerHTML = "YOU LOSE";
        compPick.classList.add('effect');
    } else if (selected == "rock" && randCompPick == "scissors") {
        setTimeout(()=>{
            addScore(1); 
            gamePickResult.classList.add('active'); 
        }, 1500);
        gameResult.innerHTML = "YOU WIN";
        playerPick.classList.add('effect');
    } else if (selected == "rock" && randCompPick == "paper") {
        setTimeout(()=>{
            addScore(-1);  
            gamePickResult.classList.add('active');
        }, 1500);
        gameResult.innerHTML = "YOU LOSE";
        compPick.classList.add('effect');
    } else if (selected == "paper" && randCompPick == "rock") {
        setTimeout(()=>{
            addScore(1);  
            gamePickResult.classList.add('active');
        }, 1500);
        gameResult.innerHTML = "YOU WIN";
        playerPick.classList.add('effect');
    }
};

getWinner();

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
};

playAgainButton.addEventListener('click', playAgain);

/*------Modal window-----*/

const modalHandler = () => {
    modal.classList.toggle("show");
};
rulesBtn.addEventListener("click", modalHandler);
closeBtn.addEventListener("click", modalHandler);
