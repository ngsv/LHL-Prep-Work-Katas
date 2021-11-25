//Number Guesser

let prompt = require("prompt-sync")();

//Generate random number from 0 - 100 (inclusive)
let randomNum = Math.floor(Math.random() * 101);
let guesses = [];
let guessed = false;
let numGuesses = 0;

//Check random number generated
console.log(randomNum);

let answer = -1;

while (answer != randomNum) {

  //Prompts and stores in variable 'answer'
  answer = prompt("Guess a number: ");

  //Checks if the input is a number
  if (isNaN(Number(answer)) === true) {
    console.log("Not a number! Try again!");
  } else {

    //Checks if number has already been guessed
    for (let i = 0; i < guesses.length; i++) {
      if (guesses[i] === Number(answer)) {
        guessed = true;
      }
    }

    if (guessed === false) {
      guesses.push(Number(answer));
      numGuesses++;
      if (Number(answer) > randomNum) {
        console.log("Too High!");
      } else {
        console.log("Too Low!");
      }
    } else if (guessed === true) {
      console.log("Already Guessed!");
    }
  }
}

console.log("You got it! You took " + numGuesses + " attempts!");
