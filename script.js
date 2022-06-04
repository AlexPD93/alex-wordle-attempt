//Global variables
const green = "#6AAA64";
const orange = "#C9B458";
const grey = "#787C7E";
let count = 0;
let winningWord = "spain";
let winningWordArray = Array.from(winningWord).join("");

// Grabbing elements
const buttons = Array.from(document.querySelectorAll("button"));
const tileArray = document.querySelectorAll("p");

// Event listeners
buttons.forEach((button) => {
  button.addEventListener("click", addLetter);
});
document.addEventListener("keydown", logKey);

// Getting the button clicked on and looping through the array to assign the innerHTML as the letter of each tile.

function addLetter(event) {
  let letter = event.target.innerHTML;

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i].innerHTML === "") {
      tileArray[i].innerHTML = `${letter}`;
      count++;
      return;
    }
  }
}

function wordCorrectFirstRow(letter) {
  for (let i = 0; i < winningWordArray.length; i++) {
    if (letter === winningWordArray[i]) {
      for (let j = 0; j < tileArray.length; j++) {
        if (winningWordArray[j] === tileArray[j].innerHTML) {
          tileArray[j].style.background = green;
        } else if (tileArray[j].innerHTML === letter) {
          tileArray[j].style.background = orange;
        }
      }
    } else if (!winningWordArray.includes(letter)) {
      for (let k = 0; k < tileArray.length; k++) {
        if (tileArray[k].innerHTML === letter) {
          tileArray[k].style.background = grey;
        }
      }
    }
  }
}

function wordCorrectSecondRow(letter) {
  for (let i = 0; i < winningWordArray.length; i++) {
    for (let j = 5; j < tileArray.length; j++) {
      if (
        letter === winningWordArray[i] &&
        tileArray[j].innerHTML === winningWordArray[i]
      ) {
        tileArray[j].style.background = green;
      }
    }
  }
}

//Function for when enter is pressed

function pressEnter(letter) {
  // Check count is divisible by 5 run word correct function
  if (count === 5) {
    wordCorrectFirstRow(letter);
  }
  if (count === 10) {
    wordCorrectSecondRow(letter);
  }
}

function pressBackspace(letter) {
  count--;
}

let letters = [];
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
      pressBackspace();
      return;
    }
  }
}
