'use strict';

let number = document.querySelector(".number");
let inputGuess = document.querySelector(".guess");
let btnCheck = document.querySelector(".check");
let btnAgain = document.querySelector(".again");

number = Math.floor(Math.random() * 6) + 1;

let alertGuess = () => {
    alert(number);
}

let clickCheck = () => {
    btnCheck.getAttribute("click", alertGuess())

    if(Number(inputGuess.value) === number) {
        alert("acerto mizeravi");
    }
    else {
        alert("erro mizeravi");
    }

    inputGuess.value = 0;
}

let clickAgain = () => {

    number = Math.floor(Math.random() * 6) + 1;
}
