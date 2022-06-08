import randomCountry from "./countries.js";

//Global variables
const green = "#6AAA64";
const orange = "#C9B458";
const grey = "#787C7E";
const borderGreyDark = "#878A8C";
const borderGreyLight = "#d3d6da";
const white = "#ffffff";
let count = 0;
let winningWord = randomCountry.toLowerCase();
console.log(winningWord);
let winningWordArray = Array.from(winningWord);

// Grabbing elements
const buttons = Array.from(document.querySelectorAll("button"));
const tileArray = document.getElementsByClassName("tile");
const container = document.getElementById("board");

// Event listeners
buttons.forEach((button) => {
  button.addEventListener("click", addLetter);
});
document.addEventListener("keydown", logKey);

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

// Targeting the button clicked on and looping through the array to assign the innerHTML as the letter of each tile.

function addLetter(event) {
  let letter = event.target.innerHTML;

  if (letter === "enter") {
    pressEnter();
    return;
  }

  if (letter === "Backspace") {
    pressBackspace();
    return;
  }

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i].innerHTML === "") {
      tileArray[i].innerHTML = `${letter}`;
      letterArray.push(tileArray[i].innerHTML);
      tileArray[i].style.border = `2px solid ${borderGreyDark}`;
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
      tileArray[i + indexIncrement].style.color = white;
    } else if (winningWord.includes(letterArray[i])) {
      tileArray[i + indexIncrement].style.background = orange;
      tileArray[i + indexIncrement].style.color = white;
    } else if (!winningWord.includes(letterArray[i])) {
      tileArray[i + indexIncrement].style.background = grey;
      tileArray[i + indexIncrement].style.color = white;
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
  tileArray[count - 1].style.border = `1.5px solid ${borderGreyLight}`;
  tileArray[count - 1].style.background = white;
  console.log(tileArray[count - 1].innerHTML);
  count--;
  document.addEventListener("keydown", logKey);
}

//Function that runs when a letter is pressed
let letterArray = [];
function logKey(e) {
  console.log(e);
  let letter = e.key;
  let keyCode = e.keyCode;

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[i].innerHTML === "" && keyCode >= 65 && keyCode <= 90) {
      tileArray[i].innerHTML = `${letter}`;
      tileArray[i].style.border = `2px solid ${borderGreyDark}`;
      letterArray.push(tileArray[i].innerHTML);
      count++;
      return;
    }
  }

  if (keyCode === 13) {
    pressEnter();
    return;
  }
  if (keyCode === 8) {
    pressBackspace();
    return;
  }
}
