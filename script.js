let green = "#6AAA64";

// Add event listener to button press
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

function wordCorrectFirstRow(letter) {
  console.log(letter);
  /*arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#C9B458";
    } else if (!winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#787C7E";
    }
  });*/
}

// Making an array from all buttons so I can access the innerHTML of each button and style later.
document.addEventListener("keydown", logKey);
let keyArray = Array.from(document.querySelectorAll("button"));
let buttonValue = keyArray.map((button) => {
  return button.innerHTML;
});

//Function for when enter is pressed

function pressEnter(letter) {
  // Check count is divisible by 5 run word correct function
  if (count % 5 === 0) {
    wordCorrectFirstRow(letter);
  } else console.log("error");
}

//Function that runs when a letter is pressed
function logKey(e) {
  let letter = e.key;
  let keyCode = e.keyCode;

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i].innerHTML === "" && keyCode >= 65 && keyCode <= 90) {
      tileArray[i].innerHTML = `${letter}`;
      count++;
      return;
    }
    if (keyCode === 13) {
      pressEnter(tileArray[i].innerHTML);
    }
    if (keyCode === 8) {
      backSpace();
    }
  }
}

let winningWord = "spain";
