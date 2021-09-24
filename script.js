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

number = Math.floor(Math.random() * 20) + 1;

// ------------------------------
// ! ARRUMAR
// ------------------------------   
if (highScore.innerHTML = 0) {
    btnReset.setAttribute('disabled');
}

let alertGuess = () => {
    alert(number);
}

let clickCheck = () => {
    btnCheck.getAttribute("click", alertGuess());

    if(Number(inputGuess.value) === number) {
        
        message.innerText = "🎉 Correct Number!"

        bodyBG.style.backgroundColor = "#60b347";
        
        if (score.innerHTML > highScore.innerHTML) {
            highScore.innerHTML = score.innerHTML;            
        }
        
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

    number = Math.floor(Math.random() * 20) + 1;

    bodyBG.style.backgroundColor = "";

    score.innerHTML = 20;
}

let clickReset = () => {

    if (highScore.innerHTML === 0) {
        btnReset.setAttribute("disable");
    }

    highScore.innerHTML = 0;

    number = Math.floor(Math.random() * 20) + 1;

    bodyBG.style.backgroundColor = "";

    score.innerHTML = 20;
}
