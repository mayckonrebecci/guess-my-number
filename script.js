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

let randomNum = Math.floor(Math.random() * 20) + 1;
number.innerHTML = "?";
highScore.innerHTML = 0;
score.innerHTML = 20;

let btnCheckOnLoad = () =>{
    if (Number(inputGuess.value) > 20
    || Number(inputGuess.value) < 1
    || message.innerText === "🎉 Correct Number!"
    || message.innerHTML === "💀 Game Over!") {
        btnCheckDisabled();
    }
    else {
        btnCheckEnabled();
    }
}

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
    if (Number(highScore.innerHTML) > 0 || Number(score.innerHTML) < 20) {
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
    
    if (Number(inputGuess.value) === randomNum) {
        
        message.innerText = "🎉 Correct Number!";
        bodyBG.style.backgroundColor = "#60b347";
        
        number.innerHTML = randomNum;
        
        if (score.innerHTML > highScore.innerHTML) {
            highScore.innerHTML = score.innerHTML;            
        }
        
        btnCheckDisabled();
        btnAgainEnabled();
        btnResetEnabled();

    }
    else if (Number(score.innerHTML) <= 1) {

        score.innerHTML = "0";
        message.innerHTML = "💀 Game Over!";
        bodyBG.style.backgroundColor = "#c32c2c";

        btnCheckDisabled();
        if (Number(highScore.innerHTML) > 0)
        {
            btnAgainEnabled();
        }
    }
    else {
        if (Number(inputGuess.value) > randomNum && Number(inputGuess.value) <= 20) {
            message.innerText = "📈 Too High!";

            score.innerHTML--;

            btnResetEnabled();
        }
        if (Number(inputGuess.value) < randomNum && Number(inputGuess.value) > 0) {
            message.innerText = "📉 Too Low!";

            score.innerHTML--;
            btnResetEnabled();
        }
    }

    inputGuess.value = 1;
}

inputGuess.addEventListener("keypress", (event) => {
    if(event.keyCode === 13 
        && Number(inputGuess.value) >= 1 
        && Number(inputGuess.value) <= 20
        && message.innerText !== "🎉 Correct Number!"
        && message.innerHTML !== "💀 Game Over!") {
        event.preventDefault();
        clickCheck();
    }
})

let clickAgain = () => {
    randomNum = Math.floor(Math.random() * 20) + 1;
    number.innerText = "?";
    
    
    message.innerText = "Start guessing...";    
    bodyBG.style.backgroundColor = "";    
    score.innerHTML = 20;
    
    
    btnResetDisabled();
    btnCheckEnabled();
    btnAgainDisabled();
    btnCheckOnLoad();
}

let clickReset = () => {
    randomNum = Math.floor(Math.random() * 20) + 1;  
    number.innerHTML = "?";
    
    
    highScore.innerHTML = 0;
    message.innerText = "Start guessing...";
    bodyBG.style.backgroundColor = "";    
    score.innerHTML = 20;
    

    btnCheckEnabled();
    btnResetDisabled();
    btnAgainDisabled();
    btnCheckOnLoad();
}
