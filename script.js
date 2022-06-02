// Adding event listener to keyboard press
let deferredPrompt;
document.addEventListener("click", rowOneAddLetter);

let tileArray = document.querySelectorAll("p");

function rowOneAddLetter(event) {
  let letter = event.target.innerHTML;

  for (let i = 0; i < tileArray.length; i++) {
    if (tileArray[0].innerHTML === "") {
      tileArray[0].innerHTML = `${letter}`;
      rowOneAddLetter();
    }
    if (tileArray[0].innerHTML !== "" && tileArray[1].innerHTML === "") {
      tileArray[1].innerHTML = `${letter}`;
      rowOneAddLetter();
    }
    if (tileArray[1].innerHTML !== "" && tileArray[2].innerHTML === "") {
      tileArray[2].innerHTML = `${letter}`;
      rowOneAddLetter();
    }
    if (tileArray[2].innerHTML !== "" && tileArray[3].innerHTML === "") {
      tileArray[3].innerHTML = `${letter}`;
      rowOneAddLetter();
    }
    if (tileArray[3].innerHTML !== "" && tileArray[4].innerHTML === "") {
      tileArray[4].innerHTML = `${letter}`;
      wordCorrect(tileArray);
    }
  }
}

function wordCorrect(arr) {
  arr.forEach((tile, index) => {
    if (winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#6AAA64";
    } else if (!winningWord.includes(tile.innerHTML) && index < 5) {
      tile.style.background = "#787C7E";
    }
  });
  /*if (winningWord.includes(tile[0].innerHTML)) {
    tile[0].style.background = "#6AAA64";
  } else if (!winningWord.includes(tile[0].innerHTML)) {
    tile[0].style.background = "#787C7E";
  }*/
}

// Making an array from all buttons so I can access the innerHTML of each button and style later.
let keyArray = Array.from(document.querySelectorAll("button"));
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
