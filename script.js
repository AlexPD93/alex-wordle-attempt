import randomCountry from "./countries.js";

//Global variables
const green = "#6AAA64";
const orange = "#C9B458";
const grey = "#787C7E";
let count = 0;
let winningWord = randomCountry.toLowerCase();
console.log(winningWord);
let winningWordArray = Array.from(winningWord);

// Grabbing elements
const buttons = Array.from(document.querySelectorAll("button"));
const tileArray = document.getElementsByClassName("tile");
const container = document.getElementById("board");

//Function to make grid
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("p");
    container.appendChild(cell).className = "tile";
  }
}

makeRows(6, winningWord.length);

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

function checkCorrectLetters(indexIncrement, start, end) {
  letterArray = letterArray.slice(start, end);
  for (let i = 0; i < winningWord.length; i++) {
    if (letterArray[i] === winningWordArray[i]) {
      tileArray[i + indexIncrement].style.background = green;
    } else if (winningWord.includes(letterArray[i])) {
      tileArray[i + indexIncrement].style.background = orange;
    } else if (!winningWord.includes(letterArray[i])) {
      tileArray[i + indexIncrement].style.background = grey;
    }
  }
}

//Function for when enter is pressed

function pressEnter() {
  // Check count is divisible by 5 run word correct function
  // Three things that change are: Start and end of slice and tile index increment
  let indexIncrement = count - winningWord.length;
  let start = 0;
  let end = winningWord.length;

  if (count === winningWord.length) {
    checkCorrectLetters(indexIncrement, start, end);
  }
  if (count === winningWord.length * 2) {
    start = winningWord.length + start;
    end = winningWord.length + end;
    checkCorrectLetters(indexIncrement, start, end);
  }
  if (count === winningWord.length * 3) {
    start = winningWord.length + start;
    end = winningWord.length + end;
    checkCorrectLetters(indexIncrement, start, end);
  }
  if (count === winningWord.length * 4) {
    start = winningWord.length + start;
    end = winningWord.length + end;
    checkCorrectLetters(indexIncrement, start, end);
  }
  if (count === winningWord.length * 5) {
    start = winningWord.length + start;
    end = winningWord.length + end;
    checkCorrectLetters(indexIncrement, start, end);
  }
  if (count === winningWord.length * 6) {
    start = winningWord.length + start;
    end = winningWord.length + end;
    checkCorrectLetters(indexIncrement, start, end);
  }
}

function pressBackspace() {
  tileArray[count - 1].innerHTML = "";
  count--;
}

//Function that runs when a letter is pressed
let letterArray = [];
function logKey(e) {
  let letter = e.key;
  let keyCode = e.keyCode;

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i].innerHTML === "" && keyCode >= 65 && keyCode <= 90) {
      tileArray[i].innerHTML = `${letter}`;
      letterArray.push(tileArray[i].innerHTML);
      count++;
      return;
    }
  }
  if (keyCode === 13) {
    pressEnter();
  }
  if (keyCode === 8) {
    pressBackspace();
    return;
  }
}
