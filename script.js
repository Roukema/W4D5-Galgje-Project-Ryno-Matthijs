let getInput = document.querySelector("input");
// Initialize ALL global variables here
let maxAmount = 5;
let word;
let inputsArray = "";
let gameOver;
let tries = 0;

// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

const wordPicker = function(list) {
  let index = Math.floor(Math.random() * list.length);
  const x = list;
  return x[index];
};

const wordGuessed = function(word, inputsArray) {
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(function(letter) {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputsArray.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};

// const clean = function() {
//   document.querySelector("input").value = "";
// };

const winTheGame = function() {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const loseTheGame = function() {
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const rightAnswerIs = function(word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

const updateTriesDisplay = function(tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

const wrongLettersInTheRow = function(word, inputsArray) {
  let wrongLetters = inputsArray.filter(function(letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const showWord = function(word, inputLetterWords) {
  let display = word.map(function(letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  wordToDom(display);
};
const wordToDom = display =>
  (document.querySelector(".the_word").innerHTML = display.join(" "));

const guessLetter = function(input) {
  getInput.value = "";
  if (gameOver) {
    return;
  }

  if (inputsArray.includes(input) || input === "") {
    return;
  }

  if (!word.includes(input)) {
    tries++;
    updateTriesDisplay(tries);
  }

  inputsArray.push(input);
  showWord(word, inputsArray);
  wrongLettersInTheRow(word, inputsArray);

  if (wordGuessed(word, inputsArray)) {
    winTheGame();
  } else if (tries >= maxAmount) {
    loseTheGame();
  }
};

const beginTheGameWithPlayer = function() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = wordPicker(wordList).split("");
  rightAnswerIs(word);
  word;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputsArray = [];
  showWord(word, inputsArray);
  wrongLettersInTheRow(word, inputsArray);
};

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".guess").addEventListener("click", function() {
    guessLetter(getInput.value);
  });
  document
    .querySelector(".restart")
    .addEventListener("click", beginTheGameWithPlayer);
  beginTheGameWithPlayer();
});

module.exports = { guessLetter, wordPicker, showWord, wordToDom };
