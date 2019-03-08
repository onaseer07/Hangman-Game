
$(document).ready(function() {
// A random word is selected and stored in an array from the word bank array
const wordBank = ["Bootstrap", "jQuery", "Javascript", "Hypertext Markup Language", "Cascading Style Sheets", "Python"];

let randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(randomWord);
//store the selected randomWordstring length in an array

let randomWordStr = [];

for (let i = 0; i < randomWord.length; i++) {
    randomWordStr.push(randomWord[i].toLowerCase());
}
console.log(randomWordStr);

//The player has to guess the word letter by letter
const letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// The player has 6 opportunities, each representing a part of the hanged man (head, body, arm, etc)
let lives = 6;
let wins = 0;
let losses = 0;

//Player selected alphabet gets stored in an array to compare against randomWordStr. 
let userInputArray = [];

//VIEW

$().html()


//LOGIC
$("body").keyup(function () {


    
    console.log(event.key)
    let userInput = event.key;
    userInputArray.push(userInput);

    //Check to see if pressed key exists in the randonWordStr
    if (randomWordStr.includes(userInput)) {
        console.log(`${userInput} exists in the word`)
    } else {
        console.log(`${userInput} does not exists - You have less chances now`)
    }
    //if it does then reveal the word
    //else decrement the lives by 1
    //if lives reaches 0 alert the user the 
})
})

