// Adding event listener to keyboard press
document.addEventListener("keydown", logKey);

// Making an array from all buttons so I can access the innerHTML of each button and style later.
let keyArray = Array.from(document.querySelectorAll("button"));
let buttonValue = keyArray.map((button) => {
  return button.innerHTML;
});

//Function that runs when a key is pressed
function logKey(e) {
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
}

let rowArray = Array.from(document.querySelectorAll("p"));
let rowOne = rowArray.slice(0, 5);
console.log(rowOne);

function addTileLetter(letter) {}

let winningWord = "spain";
