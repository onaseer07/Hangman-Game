// A random word is selected and stored in an array from the word bank array
const wordBank = ["Bootstrap","jQuery","Javascript","Hypertext Markup Language","Cascading Style Sheets","Python"];
let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);
//store the selected randomWordstring length in an array
let randomWordStr = [];
for (let i = 0; i < randomWord.length;i++) {
    randomWordStr.push(randomWord[i]);
    console.log(randomWordStr[i]);
}

//The player has to guess the word letter by letter
const letterList = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
// The player has 6 opportunities, each representing a part of the hanged man (head, body, arm, etc)
let lives = 6;
wins = 0;
losses = 0;
//Player selected alphabet gets stored in an array to compare against randomWordStr. 
let userInputArray = [];
$("body").keyup(function(){
    let userInput = event.key;
    userInputArray.push(userInput);
})
// Each incorrect guess makes one piece of the hanged man appear

// Each correct guess makes every appearance of that letter appear

// The player wins when all letters are guessed and revealed

// The player loses when the entire hanged man appears