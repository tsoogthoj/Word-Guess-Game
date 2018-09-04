var wordBank =
    ['tyrannosaurs', 'velociraptor', 'triceratops',
    'brachiosaurus', 'stegosaurus', 'allosaurus',];

var abc = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var lives;
var guesses;
var currentWord;
var splitCurrentWord;
var changedLetter;

// Randomly choose word and convert it each letter to '_'
    // Random Word
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);
    // convert current random word to array
    splitCurrentWord = currentWord.split('');
    console.log(splitCurrentWord);
    // convert split current word array into "_"
    for (var i = 0; i < splitCurrentWord.length; i++) {
        splitCurrentWord[i] = "_"
    }
    console.log(splitCurrentWord);


// Create list of the current word with '_'
    // create ul
    var ul = document.createElement('ul');
    // attach ul to id='hiddenWord'
    document.getElementById('hiddenWord').appendChild(ul);
    // add id to ul so li can be created dynamicly
    ul.id = 'hiddenWordUl'
    // create li with id and _
    for (var i = 0; i < currentWord.length; i++) {
        // Create list
        var li = document.createElement('li')
        document.getElementById('hiddenWordUl').appendChild(li);
        // Add id to list
        li.id = "letter-" + i;
        // Add text to list by id
        var letterId = document.getElementById('letter-' + i);
        changedLetter = letterId.appendChild(document.createTextNode(splitCurrentWord[i]));
    }

// Create button with alphabet
    // create ul
    var ul = document.createElement('ul');
    // attach ul to id='alphabet'
    document.getElementById('alphabet').appendChild(ul);
    // Add id to new ul
    ul.id = 'alphabetUl';
    // create buttons with the alphabet
    for (var i = 0; i < abc.length; i++) {
        // create button
        var li = document.createElement('li');
        document.getElementById('alphabetUl').appendChild(li);
        // add id to button
        li.id = "alphabet-" + i;
        // add text to button
        var liId = document.getElementById('letter-' + i);
        var text = document.createTextNode(abc[i]);
        li.appendChild(text);
    }

// Data
    // Population
    lives = 3;
    document.getElementById("lives").innerHTML = "Population: " + lives;
    // Guesses
    guesses = 10;
    document.getElementById('guesses').innerHTML = "Guesses: " + guesses;
// Game Function
    // Press key to guess
    document.onkeyup = function(event) {
        // add pressed key to variable
        var keyGuess = event.key;
        console.log(keyGuess);
        // Check key presses
        for (var i = 0; i < currentWord.length; i++) {
            // if correct then replace '_' with correct guess
            if (currentWord[i] === keyGuess) {
                document.getElementById('letter-' + i).innerHTML = keyGuess;
            } else {
                guesses = guesses - 1;
            }
        }
        // Fade button that was pressed using the key
        for (var i = 0; i < abc.length; i++) {
            if (abc[i] === keyGuess) {
                abcId = document.getElementById('alphabet-' + i).setAttribute("class", "active"); 
                }   
            }
    }

    // Press and fade button when clicked on
    for (var i = 0; i < abc.length; i++) {
        abcId = document.getElementById('alphabet-' + i);
        abcId.onclick = function() {
             // Fade button when pressed
            this.setAttribute("class", "active");
            console.log(this.innerHTML);
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === this.innerHTML) {
                document.getElementById('letter-' + i).innerHTML = this.innerHTML;
                }
            }
            }
    }

  
    
    
    




    



