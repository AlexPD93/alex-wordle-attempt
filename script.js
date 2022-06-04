let green = "#6AAA64";

// Adding event listener to button press
let buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
  button.addEventListener("click", addLetter);
});

let tileArray = document.querySelectorAll("p");
let count = 0;
let currentGuess = [];

// Getting the letter clicked on and looping through the array to assign the innerHTML as the letter of each tile.

function addLetter(event) {
  let letter = event.target.innerHTML;

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i].innerHTML === "") {
      tileArray[i].innerHTML = `${letter}`;
      count++;
      if (count === 5) {
        wordCorrectFirstRow(tileArray);
      } else if (count === 10) {
        wordCorrectSecondRow(tileArray);
      } else if (count === 15) {
        wordCorrectThirdRow(tileArray);
      } else if (count === 20) {
        wordCorrectFourthRow(tileArray);
      } else if (count === 25) {
        wordCorrectFifthRow(tileArray);
      } else if (count === 30) {
        wordCorrectSixthRow(tileArray);
      }
      return;
    }
  }
  wordCorrectFirstRow(tileArray);
}

function wordCorrectFirstRow(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#C9B458";
    } else if (!winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#787C7E";
    }
  });
}

function wordCorrectSecondRow(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index > 4 && index < 10) {
      tile.style.background = "#C9B458";
    } else if (
      !winningWord.includes(tile.innerHTML) &&
      index > 4 &&
      index < 10
    ) {
      tile.style.background = "#787C7E";
    }
  });
}

function wordCorrectThirdRow(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index > 9 && index < 15) {
      tile.style.background = "#C9B458";
    } else if (
      !winningWord.includes(tile.innerHTML) &&
      index > 9 &&
      index < 15
    ) {
      tile.style.background = "#787C7E";
    }
  });
}

function wordCorrectFourthRow(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index > 14 && index < 20) {
      tile.style.background = "#C9B458";
    } else if (
      !winningWord.includes(tile.innerHTML) &&
      index > 14 &&
      index < 20
    ) {
      tile.style.background = "#787C7E";
    }
  });
}

function wordCorrectFifthRow(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index > 19 && index < 25) {
      tile.style.background = "#C9B458";
    } else if (
      !winningWord.includes(tile.innerHTML) &&
      index > 19 &&
      index < 25
    ) {
      tile.style.background = "#787C7E";
    }
  });
}

function wordCorrectSixthRow(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index > 24 && index < 30) {
      tile.style.background = "#C9B458";
    } else if (
      !winningWord.includes(tile.innerHTML) &&
      index > 24 &&
      index < 30
    ) {
      tile.style.background = "#787C7E";
    }
  });
}

// Making an array from all buttons so I can access the innerHTML of each button and style later.
/*let keyArray = Array.from(document.querySelectorAll("button"));
let buttonValue = keyArray.map((button) => {
  return button.innerHTML;
});

//Function that runs when a key is pressed
/*function logKey(e) {
  //Iterate over the html array to find if the key typed is the same as the html of a button and to check if the word has that letter.
  buttonValue.forEach((letter) => {
    if (letter === e.key && winningWord.includes(letter)) {
      // Iterate over the buttons to check that the html and the letter match. If so change the background to green.
      keyArray.forEach((buttons) => {
        if (buttons.innerHTML === letter) {
          buttons.style.background = "green";
          addTileLetter(letter);
        }
      });
    } // If the letter and key pressed are the same but the answer doesn't have that letter. Then that letter's tile turns grey.
    else if (letter === e.key && winningWord.includes(letter) === false) {
      keyArray.forEach((buttons) => {
        if (buttons.innerHTML === letter) {
          buttons.style.background = "grey";
          addTileLetter(letter);
        }
      });
    }
  });
}*/

let winningWord = "spain";
