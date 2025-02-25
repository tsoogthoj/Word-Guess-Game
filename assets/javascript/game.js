var wordBank = [
  "elephant",
  "tiger",
  "zebra",
  "giraffe",
  "monkey",
  "lion",
  "bear",
  "kangaroo",
  "panda",
  "penguin",
  "seal",
  "walrus",
  "dolphin",
  "whale",
  "shark",
  "octopus",
  "squid",
  "jellyfish",
  "crab",
  "lobster",
  "starfish",
  "seahorse",
  "turtle",
  "stingray",
  "manatee",
  "narwhal",
  "whale",
  "lion",
  "otter",
  "platypus",
  "koala",
];

var abc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var lives;
var guesses;
var currentWord;
var splitCurrentWord;
var changedLetter;

alert("You are about to play Jurrasic Hangman.");
alert(
  "Rules: Press any key to guess or use buttons to guess. Don't let the T-Rex eat your people."
);

// Randomly choose word and convert it each letter to '_'
// Random Word
function generateRandomWord() {
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(currentWord);
  // convert current random word to array
  splitCurrentWord = currentWord.split("");
  console.log(splitCurrentWord);
  // convert split current word array into "_"
  for (var i = 0; i < splitCurrentWord.length; i++) {
    splitCurrentWord[i] = "_";
  }
  console.log(splitCurrentWord);
}
generateRandomWord();
// Create list of the current word with '_'
// create ul
var ul = document.createElement("ul");
// attach ul to id='hiddenWord'
document.getElementById("hiddenWord").appendChild(ul);
// add id to ul so li can be created dynamicly
ul.id = "hiddenWordUl";
// create li with id and _
function createList() {
  for (var i = 0; i < currentWord.length; i++) {
    // Create list
    var li = document.createElement("li");
    document.getElementById("hiddenWordUl").appendChild(li);
    // Add id to list
    li.id = "letter-" + i;
    // Add text to list by id
    var letterId = document.getElementById("letter-" + i);
    changedLetter = letterId.appendChild(
      document.createTextNode(splitCurrentWord[i])
    );
  }
}
createList();
// Create button with alphabet
// create ul
var ul = document.createElement("ul");
// attach ul to id='alphabet'
document.getElementById("alphabet").appendChild(ul);
// Add id to new ul
ul.id = "alphabetUl";
// create buttons with the alphabet
function createButton() {
  for (var i = 0; i < abc.length; i++) {
    // create button
    var li = document.createElement("li");
    document.getElementById("alphabetUl").appendChild(li);
    // add id to button
    li.id = "alphabet-" + i;
    // add text to button
    var liId = document.getElementById("letter-" + i);
    var text = document.createTextNode(abc[i]);
    li.appendChild(text);
  }
}
createButton();
// Data
// Population
lives = 3;
document.getElementById("lives").innerHTML = lives;
// Guesses
guesses = 10;
document.getElementById("guesses").innerHTML = guesses;

// Game Functions
// Move dino base on guesses left
function moveDino() {
  var dinoId = document.getElementById("dinoRun");
  dinoId.style.position = "relative";
  dinoId.style.left = 8 * (10 - guesses) + "%";
  console.log(dinoId.style.left);
}
// Remove active class
function resetButton() {
  for (var i = 0; i < 26; i++)
    document.getElementById("alphabet-" + i).classList.remove("active");
}
// lives operation
function livesOperation() {
  if (lives <= 0) {
    setTimeout(function () {
      alert("Game Over. Press OK to restart.");
      lives = 3;
      document.getElementById("lives").innerHTML = lives;
      // reset number of guesses
      guesses = 10;
      document.getElementById("guesses").innerHTML = guesses;
    }, 3000);
  }
}
// Guesses operation
function guessesOperation() {
  if (guesses <= 0) {
    // minus 1 in population
    lives -= 1;
    document.getElementById("lives").innerHTML = lives;
    // hideDinoMan();
    showCensored();
    document.getElementById("dinoEatMan").play();
    setTimeout(function () {
      if (lives === 2) {
        alert(
          "The T-Rex has caught up and eatten one of your people. You have 2 more people left."
        );
      } else if (lives === 1) {
        alert(
          "The T-Rex has caught up and eatten one more of your people. You have one more person left."
        );
      }
      // hide censored
      hideCensored();
      // showDinoMan();
      // Reset guesses
      guesses = 10;
      document.getElementById("guesses").innerHTML = guesses;
      // Reset hidden word
      document.getElementById("hiddenWordUl").innerHTML = "";
      // Reset buttons
      resetButton();
      // Recreate
      generateRandomWord();
      createList();
      moveDino();
    }, 3000);
  }
}
// Hide Censored Image
function hideCensored() {
  document.getElementById("censored").style.display = "none";
}
hideCensored();
// Display Censored Image
function showCensored() {
  document.getElementById("censored").style.display = "block";
}
// Hide dino and man
function hideDinoMan() {
  document.getElementById("dinoRun").style.display = "none";
  document.getElementById("manRun").style.display = "none";
}
// Show dino and man
function showDinoMan() {
  document.getElementById("dinoRun").style.display = "block";
  document.getElementById("manRun").style.display = "";
}
// Play Jurrasic theme song
document.getElementById("playThemeSongButton").onclick = function () {
  document.getElementById("themeSong").play();
};
// Pause Jurrasic theme song
document.getElementById("pauseThemeSongButton").onclick = function () {
  document.getElementById("themeSong").pause();
};

// if guessed wrong then -1 from number of guesses and move dino
function guessedWrong(event) {
  var j = currentWord.indexOf(event);
  if (j === -1) {
    guesses -= 1;
    console.log(guesses);
    document.getElementById("guesses").innerHTML = guesses;
    // Move dino left base on guesses
    var dinoId = document.getElementById("dinoRun");
    dinoId.style.position = "relative";
    dinoId.style.left = 8 * (10 - guesses) + "%";
  }
  console.log(guesses);
}
// Guess if hidden word is guess correctly
function joinHiddenWord() {
  var join = "";
  for (var i = 0; i < currentWord.length; i++) {
    join += document.getElementById("letter-" + i).innerHTML;
  }
  console.log(join);
  if (join === currentWord) {
    document.getElementById("win").play();
    alert(
      "You guessed " + currentWord + " correctly and saved one of your people."
    );
    // Reset guesses
    guesses = 10;
    document.getElementById("guesses").innerHTML = guesses;
    // Reset hidden word
    document.getElementById("hiddenWordUl").innerHTML = "";
    // Reset buttons
    resetButton();
    // Recreate
    generateRandomWord();
    createList();
    moveDino();
  }
}

// Press key to guess
document.onkeyup = function (event) {
  // add pressed key to variable
  var keyGuess = event.key;
  console.log(keyGuess);
  // Check key presses
  for (var i = 0; i < currentWord.length; i++) {
    // if correct then replace '_' with correct guess
    if (currentWord[i] === keyGuess) {
      document.getElementById("letter-" + i).innerHTML = keyGuess;
    }
  }
  // Fade button that was pressed using the key
  for (var i = 0; i < abc.length; i++) {
    if (abc[i] === keyGuess) {
      abcId = document
        .getElementById("alphabet-" + i)
        .setAttribute("class", "active");
    }
  }
  // Check to see if word is guessed correctly
  joinHiddenWord();
  // if guessed wrong then -1 from number of guesses and move dino
  guessedWrong(keyGuess);
  // Guess operation
  guessesOperation();
  // lives operation
  livesOperation();
};

// Press and fade button when clicked on
for (var i = 0; i < abc.length; i++) {
  abcId = document.getElementById("alphabet-" + i);
  abcId.onclick = function () {
    // Fade button when pressed
    this.setAttribute("class", "active");
    var clickedLetter = this.innerHTML;
    console.log(clickedLetter);
    // if correct then replace '_' with correct guess
    for (var i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === this.innerHTML) {
        document.getElementById("letter-" + i).innerHTML = this.innerHTML;
      }
    }
    // Check to see if word is guessed correctly
    joinHiddenWord();
    // if guessed wrong then -1 from number of guesses and move dino
    guessedWrong(clickedLetter);
    // Guess operation
    guessesOperation();
    // lives operation
    livesOperation();
  };
}
