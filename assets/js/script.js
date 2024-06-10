
const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".game-words");
const wrongGuess = document.querySelector(".wrong-guess");
const hangmanImage = document.querySelector(".hangman-image img");

// List of questions-hints and answers
const wordList = [
    {
        word: "vivaldi",
        hint: "Composer known as 'The Red Priest'."
    },
    {
        word: "legato",
        hint: "Musical direction meaning 'smoothly'."
    },
    {
        word: "quartet",
        hint: "Group of four players."
    },
    {
        word: "nocturne",
        hint: "John Field created this musical form."
    },
    {
        word: "fidelio",
        hint: "Beethoven's only opera."
    },
    {
        word: "haydn",
        hint: "Composer of the 'Surprise' Symphony."
    },
    {
        word: "dublin",
        hint: "Composer Charles Villiers Stanford was born in this city."
    },
    {
        word: "baroque",
        hint: "Musical period associated with J.S. Bach."
    },
    {
        word: "holst",
        hint: "Composer of 'The Planets' suite."
    },
    {
        word: "slavonic",
        hint: "Famous dances by Dvořák"
    },
    {
        word: "trout",
        hint: "Schubert's Piano Quintet in A-Major?"
    },
    {
        word: "giuseppe",
        hint: "First name of composer Verdi"
    },
    {
        word: "gershwin",
        hint: "'Rhapsody in Blue' composer."
    },
    {
        word: "india",
        hint: "Setting for Delibes' 'Lakmé'."
    },
    {
        word: "salieri",
        hint: "Has was once thought to have poisoned Mozart."
    },
    {
        word: "borodin",
        hint: "This composer was also a chemistry professor."
    },
    {
        word: "sibelius",
        hint: "Composer of 'Finlandia'."
    },
    {
        word: "farewell",
        hint: "Haydn symphony where the performers leave one by one."
    },
    {
        word: "funeral",
        hint: "A dirge is composed for this event."
    },
    {
        word: "chord",
        hint: "Group of notes played together."
    },
    {
        word: "crotchet",
        hint: "A quarter note."
    },
    {
        word: "miserere",
        hint: "Allegri's most famous choral work."
    },
    {
        word: "aquarium",
        hint: "Seventh movement of 'Carnival of the Animals'."
    },
    {
        word: "oratorio",
        hint: "'Messiah' by Handel is one example."
    },
    {
        word: "quickly",
        hint: "How 'allegro' should be played."
    },
    {
        word: "domingo",
        hint: "One of the 'Three Tenors'."
    },
    {
        word: "hector",
        hint: "Berlioz's first name."
    },
    {
        word: "norway",
        hint: "Grieg was born in this country."
    },
    {
        word: "albeniz",
        hint: "Nineteenth century Spanish composer."
    },
    {
        word: "giacomo",
        hint: "Puccini's first name."
    },
    {
        word: "chopin",
        hint: "He composed the 'Revolutionary' étude."
    },
    {
        word: "emperor",
        hint: "Beethoven's fifth Piano Concerto?"
    },
    {
        word: "purcell",
        hint: "Composer of the 'Funeral Music for Queen Mary'."
    },
    {
        word: "baritone",
        hint: "Vocal range between tenor and bass."
    },
    {
        word: "sparrow",
        hint: "Mozart Mass nicknamed after this bird."
    },
];

let newWord, incorrectCount = 0;
const maxIncorrect = 6;

// Get random word & question
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
newWord = word;
    console.log(word);
    document.querySelector(".question-text").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

// If / Else to check whether letter is in new word
const beginGame = (button, clickedLetter) => {
if(newWord.includes(clickedLetter)) {
    // Display correct letters when selected
    [...newWord].forEach((letter, index) => {
        if(letter === clickedLetter) {
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
    })
} else {
    // Count incorrect answers and display successive hangman images
    incorrectCount++;
    hangmanImage.src = `assets/images/hangman-${incorrectCount}.png`;
}

button.disabled = true;
wrongGuess.innerText = `${incorrectCount} / ${maxIncorrect}`;
}

// Keyboard input buttons, event listener for keyboard button click
for (let i = 97;  i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => beginGame(e.target, String.fromCharCode(i)));
}

getRandomWord();