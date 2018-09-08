var wordBank =
    ['tyrannosaurs', 'velociraptor', 'triceratops',
    'brachiosaurus', 'stegosaurus', 'allosaurus', 'pachycephalosaurus', 'carnotaurus', 'mosasaurus', 'ankylosaurus', 'edmontosaurus', 'suchomimus', 'apatosaurus', 'pteranodon', 'parasaurolophus', 'microceratus', 'gallimmus'];

var abc = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var lives;
var guesses;
var currentWord;
var splitCurrentWord;
var changedLetter;

// Randomly choose word and convert it each letter to '_'
    // Random Word
    function generateRandomWord() {
        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);
    // convert current random word to array
    splitCurrentWord = currentWord.split('');
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

    var ul = document.createElement('ul');
    // attach ul to id='hiddenWord'
    document.getElementById('hiddenWord').appendChild(ul);
    // add id to ul so li can be created dynamicly
    ul.id = 'hiddenWordUl'
    // create li with id and _
    function createList() {
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
    }
    createList();
    



// Create button with alphabet
    // create ul
    var ul = document.createElement('ul');
    // attach ul to id='alphabet'
    document.getElementById('alphabet').appendChild(ul);
    // Add id to new ul
    ul.id = 'alphabetUl';
    // create buttons with the alphabet
    function createButton () {
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
    }
    createButton();
    


// Data
    // Population
    lives = 3;
    document.getElementById("lives").innerHTML = lives;
    // Guesses
    guesses = 10;
    document.getElementById('guesses').innerHTML = guesses;
// Game Function
    // Move dino base on guesses left
    function moveDino() {
        var dinoId = document.getElementById('dinoRun');
        dinoId.style.position = 'relative';
        dinoId.style.left = 8 * (10 - guesses) + '%';
        console.log(dinoId.style.left);
    }
    // Reset button
    function resetButton() {
        document.getElementById('alphabetUl').innerHTML = '';
    }
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
            }
        }
        // if guessed wrong then -1 from number of guesses
        var j = (currentWord.indexOf(keyGuess));
        if (j === -1) {
            guesses -= 1;
            console.log(guesses);
            document.getElementById('guesses').innerHTML = guesses;
            // Move dino left base on guesses
            var dinoId = document.getElementById('dinoRun');
            dinoId.style.position = 'relative';
            dinoId.style.left = 8 * (10 - guesses) + '%';
        }
        console.log(guesses);
        // Fade button that was pressed using the key
        for (var i = 0; i < abc.length; i++) {
            if (abc[i] === keyGuess) {
                abcId = document.getElementById('alphabet-' + i).setAttribute("class", "active");
                }   
        }
        if (guesses <= 0) {
            // minus 1 lives
            lives -= 1;
            document.getElementById("lives").innerHTML = lives;
             // reset number of guesses
             guesses = 10;
             document.getElementById('guesses').innerHTML = guesses;
             // Reset hidden word
             document.getElementById('hiddenWordUl').innerHTML = "";
              // Reset buttons
              resetButton();
              // Recreate
              createButton();
              generateRandomWord();
              createList();
              moveDino();


        }
        // lives operation
        if (lives <= 0) {
            alert('Game Over. Press OK or Cancel to restart.');
            lives = 3;
            document.getElementById("lives").innerHTML = lives;
            // reset number of guesses
            guesses = 10;
            document.getElementById('guesses').innerHTML = guesses;
        }
    }
    
    // Press and fade button when clicked on
    for (var i = 0; i < abc.length; i++) {
        abcId = document.getElementById('alphabet-' + i);
        abcId.onclick = function() {
             // Fade button when pressed
            this.setAttribute("class", "active");
            var clickedLetter = this.innerHTML;
            console.log(clickedLetter);
            // if correct then replace '_' with correct guess
            for (var i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === this.innerHTML) {
                    document.getElementById('letter-' + i).innerHTML = this.innerHTML;
                }
            }
            // if guessed wrong then -1 from number of guesses
            var j = (currentWord.indexOf(clickedLetter));
            if (j === -1) {
                guesses -= 1;
                console.log(guesses);
                document.getElementById('guesses').innerHTML = guesses;
                // Move dino left base on guesses
                moveDino();
            }
            // Guesses operation
            if (guesses <= 0) {
                // minus 1 in population
                lives -= 1;
                document.getElementById("lives").innerHTML = lives;
                // reset number of guesses
                guesses = 10;
                document.getElementById('guesses').innerHTML = guesses;
                // Reset hidden word
                document.getElementById('hiddenWordUl').innerHTML = "";
                // Reset buttons
                resetButton();
                // Recreate
                createButton();
                generateRandomWord();
                createList();
                moveDino();
            }
            // lives operation
            if (lives <= 0) {
                alert('Game Over. Press OK or Cancel to restart.');
                lives = 3;
                document.getElementById("lives").innerHTML = lives;
                // reset number of guesses
                guesses = 10;
                document.getElementById('guesses').innerHTML = guesses;
            }
        }
    }
    

  
    
    
    




    



