let green = "#6AAA64";
let orange = "#C9B458";
let white = "#787C7E";

// Add event listener to button press
let buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
  button.addEventListener("click", addLetter);
});

let tileArray = document.querySelectorAll("p");
let count = 0;

// Getting the letter clicked on and looping through the array to assign the innerHTML as the letter of each tile.

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
  if (winningWord.includes(letter)) {
    console.log(letter);
  }
}
/*arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#C9B458";
    } else if (!winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#787C7E";
    }
  });*/

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

function pressBackspace() {
  count--;
  console.log(count);
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
  }
  if (keyCode === 13) {
    pressEnter();
  }
  if (keyCode === 8) {
    pressBackspace();
  }
}

let winningWord = "spain";
