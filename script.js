'use strict';

let number = document.querySelector(".number");
let inputGuess = document.querySelector(".guess");
let btnCheck = document.querySelector(".check");
let btnAgain = document.querySelector(".again");
let btnReset = document.querySelector(".reset");
let message = document.querySelector(".message");
let bodyBG = document.querySelector("body");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");

const randomNum = Math.floor(Math.random() * 20) + 1;
number = randomNum;
highScore.innerHTML = 0;

// ------------------------------
// * BUTTON FUNCTIONS
// ------------------------------   
const btnResetDisabled = () => {
    if (Number(highScore.innerHTML) === 0) {
        btnReset.disabled = true;  
        btnReset.style.backgroundColor = "#7c7c7c";      
    }
}
btnResetDisabled();

const btnResetEnabled = () => {
    if (Number(highScore.innerHTML) > 0) {
        btnReset.disabled = false;
        btnReset.style.backgroundColor = "";
    }
}

const btnCheckDisabled = () => {
    btnCheck.disabled = true;
    btnCheck.style.backgroundColor = "#7c7c7c";
}

const btnCheckEnabled = () => {
    btnCheck.disabled = false;
    btnCheck.style.backgroundColor = "";
}

const btnAgainDisabled = () => {
    btnAgain.disabled = true;
    btnAgain.style.backgroundColor = "#7c7c7c";
}
btnAgainDisabled();

const btnAgainEnabled = () => {
    btnAgain.disabled = false;
    btnAgain.style.backgroundColor = "";
}

// ------------------------------
// * GAME LOGIC
// ------------------------------   
let clickCheck = () => {
    
    if(Number(inputGuess.value) === number) {
        // let number = document.querySelector(".number");
        // number.innerHTML = randomNum;

        message.innerText = "🎉 Correct Number!";

        bodyBG.style.backgroundColor = "#60b347";
        
        
        if (score.innerHTML > highScore.innerHTML) {
            highScore.innerHTML = score.innerHTML;            
        }
        
        btnCheckDisabled();
        btnAgainEnabled();
        btnResetEnabled();

    }
    else {
        if (Number(inputGuess.value) > number) {
            message.innerText = "📈 Too High!";

            score.innerHTML--;
        }
        if (Number(inputGuess.value) < number) {
            message.innerText = "📉 Too Low!";

            score.innerHTML--;
        }
    }

    inputGuess.value = 1;
}

let clickAgain = () => {
    const randomNum = Math.floor(Math.random() * 20) + 1;

    number = randomNum;
    
    bodyBG.style.backgroundColor = "";
    
    score.innerHTML = 20;
    
    btnCheckEnabled();
    btnAgainDisabled();
}

let clickReset = () => {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    
    highScore.innerHTML = 0;

    number = randomNum;
    
    bodyBG.style.backgroundColor = "";
    
    score.innerHTML = 20;
    
    btnCheckEnabled();
    btnResetDisabled();
    btnAgainDisabled();
}
