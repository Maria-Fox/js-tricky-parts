function guessingGame() {
  // Math.random() never reaches 100, so it's thru 99.
  this.randomNum = Math.floor(Math.random() * 100);
  this.guessCount = 0;
  this.won = false;


  let returnFunc = function guessANumber(guess) {
    // console.log(`The random num is : ${randomNum}, the guess is: ${guess}, the guess count is ${guessCount}`);

    // Add one to guess count
    guessCount++

    if (this.won === true) {
      return `The game is over, you already won!`
    } else if (guess === randomNum) {
      this.won = true;
      return `You win! You found ${randomNum} in ${guessCount} guesses.`;
    } else if (guess > randomNum) {
      return `${guess} is too high!`;
    } else {
      return `${guess} is too low!`
    };

  };

  return returnFunc;
};

module.exports = { guessingGame };

// Solution version below: Only difference is where the guessCount is incremented.

// function guessingGame() {
//   const ANSWER = Math.floor(Math.random() * 100);
//   let isOver = false;
//   let numGuesses = 0;

//   return function guess(num) {
//     if (isOver) return "The game is over, you already won!";
//     numGuesses++;
//     if (num === ANSWER) {
//       isOver = true;
//       const guess = numGuesses === 1 ? "guess" : "guesses";
//       return `You win! You found ${num} in ${numGuesses} ${guess}.`;
//     }
//     if (num < ANSWER) return `${num} is too low!`;
//     if (num > ANSWER) return `${num} is too high!`;
//   };
// }
