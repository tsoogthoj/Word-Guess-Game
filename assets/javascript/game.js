var wordBank =
    ['tyrannosaurs', 'velociraptor', 'triceratops',
    'brachiosaurus', 'stegosaurus', 'allosaurus',];

var abc = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var lives;
var guesses;
var currentWord;

// Random Word
currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(currentWord);

// Changes word _ _ _ _ _ _ 




document.getElementById('displayWord').innerHTML = currentWord;
