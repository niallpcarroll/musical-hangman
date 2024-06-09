const keyboardDiv = document.querySelector(".keyboard");

// Get random word & question
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
}

// Keyboard input buttons
for (let i = 97;  i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}

getRandomWord();