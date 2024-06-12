/* General structure based on CodingNepal tutorial, particularly JS code for modal pop-up and reset game structure.
 */

// Game contants
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".game-words");
const wrongGuess = document.querySelector(".wrong-guess");
const hangmanImage = document.querySelector(".hangman-image img");
const gameModal = document.querySelector(".game-modal");
const playAgain = document.querySelector(".replay-btn");


// List of questions and answers
const wordList = [{
        word: "vivaldi",
        question: "Composer known as 'The Red Priest'."
    },
    {
        word: "legato",
        question: "Musical direction meaning 'smoothly'."
    },
    {
        word: "quartet",
        question: "Group of four players."
    },
    {
        word: "nocturne",
        question: "John Field created this musical form."
    },
    {
        word: "fidelio",
        question: "Beethoven's only opera."
    },
    {
        word: "haydn",
        question: "Composer of the 'Surprise' Symphony."
    },
    {
        word: "dublin",
        question: "Composer Charles Villiers Stanford was born in this city."
    },
    {
        word: "baroque",
        question: "Musical period associated with J.S. Bach."
    },
    {
        word: "holst",
        question: "Composer of 'The Planets' suite."
    },
    {
        word: "slavonic",
        question: "Famous dances by Dvořák."
    },
    {
        word: "trout",
        question: "Schubert's Piano Quintet in A-Major?"
    },
    {
        word: "giuseppe",
        question: "First name of composer Verdi."
    },
    {
        word: "gershwin",
        question: "'Rhapsody in Blue' composer."
    },
    {
        word: "india",
        question: "Setting for Delibes' 'Lakmé'."
    },
    {
        word: "salieri",
        question: "Has was once thought to have poisoned Mozart."
    },
    {
        word: "borodin",
        question: "This composer was also a chemistry professor."
    },
    {
        word: "sibelius",
        question: "Composer of 'Finlandia'."
    },
    {
        word: "farewell",
        question: "Haydn symphony where the performers leave one by one."
    },
    {
        word: "funeral",
        question: "A dirge is composed for this event."
    },
    {
        word: "chord",
        question: "Group of notes played together."
    },
    {
        word: "crotchet",
        question: "A quarter note."
    },
    {
        word: "miserere",
        question: "Allegri's most famous choral work."
    },
    {
        word: "aquarium",
        question: "Seventh movement of 'Carnival of the Animals'."
    },
    {
        word: "oratorio",
        question: "'Messiah' by Handel is one example."
    },
    {
        word: "quickly",
        question: "How 'allegro' should be played."
    },
    {
        word: "domingo",
        question: "One of the 'Three Tenors'."
    },
    {
        word: "hector",
        question: "Berlioz's first name."
    },
    {
        word: "norway",
        question: "Grieg was born in this country."
    },
    {
        word: "albeniz",
        question: "Nineteenth century Spanish composer."
    },
    {
        word: "giacomo",
        question: "Puccini's first name."
    },
    {
        word: "chopin",
        question: "He composed the 'Revolutionary' étude."
    },
    {
        word: "emperor",
        question: "Beethoven's fifth Piano Concerto?"
    },
    {
        word: "purcell",
        question: "Composer of the 'Funeral Music for Queen Mary'."
    },
    {
        word: "baritone",
        question: "Vocal range between tenor and bass."
    },
    {
        word: "sparrow",
        question: "Mozart Mass nicknamed after this bird."
    },
    {
        word: "czerny",
        question: "Author of famous piano exercises."
    },
    {
        word: "scherzo",
        question: "A playful composition?"
    },
    {
        word: "sergei",
        question: "Rachmaninoff's first name."
    },
    {
        word: "gregory",
        question: "Catholic chant named after this pope."
    },
    {
        word: "clarinet",
        question: "Mozart Concerto in A Major?"
    },
    {
        word: "robert",
        question: "Mr Schumann's first name."
    },
    {
        word:"symphony",
        question: "An extended musical composition?"
    },
    {
        word: "dynamics",
        question: "The loudness or softness of a piece?"
    },
];

// Variables for words, letter count
let newWord, correctLetters,
    incorrectCount;
const maxIncorrect = 6;

// Get random word & question
const getRandomWord = () => {
    const {
        word,
        question
    } = wordList[Math.floor(Math.random() * wordList.length)];
    newWord = word;
    console.log(word);
    document.querySelector(".question-text").innerText = question;
    reset();
};

// Modal display if player is successful
const gameOver = (winningGame) => {
    // Based on code from CodingNepal tutorial
    setTimeout(() => {
        const modalText = winningGame ? `Correct! The word was:` : `The correct word was:`;
        gameModal.querySelector("img").src = `assets/images/${winningGame ? 'winner': 'game_over'}.jpg`;
        gameModal.querySelector("h3").innerText = `${winningGame ? 'Congratulations!': 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <span>${newWord}</span>`;
        gameModal.classList.add("show");
    }, 300);
};

// Reset game values, counter, keyboard, hangman image
// Based on example from CodingNepal tutorial
const reset = () => {
    correctLetters = [];
    incorrectCount = 0;
    wordDisplay.innerHTML = newWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
    hangmanImage.src = `assets/images/hangman-${incorrectCount}.png`;
    wrongGuess.innerText = `${incorrectCount} / ${maxIncorrect}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
};

// If / Else statement to check whether letter is in new word
const beginGame = (button, clickedLetter) => {
    if (newWord.includes(clickedLetter)) {
        // Display correct letters when selected
        [...newWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // Count incorrect answers and display successive hangman images
        incorrectCount++;
        hangmanImage.src = `assets/images/hangman-${incorrectCount}.png`;
    }

    // Disable keyboard button when clicked once
    button.disabled = true;

    // Enable counter when incorrect letter selected
    wrongGuess.innerText = `${incorrectCount} / ${maxIncorrect}`;

    // Game over function if incorrect guesses reached
    if (incorrectCount === maxIncorrect) return gameOver(false);
    if (correctLetters.length === newWord.length) return gameOver(true);
};

// Keyboard input buttons event listener for keyboard button click
// This code is from CodingNepal tutorial
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    // Event listener for keyboard button click
    button.addEventListener("click", e => beginGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

// Event listener for click of 'play again' button
playAgain.addEventListener("click", getRandomWord);