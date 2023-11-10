/**
 * Guess the number
 *
 * STEG 1
 * Sätt ett tal i en variabel.
 * Be användaren att gissa talet med hjälp av `prompt()`.
 * Om användarens gissning är fel, fråga efter en ny gissning.
 * Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 */

// Get a random number between 1 and `max` (default 10)

/* let number = 5;

let guessNumber = prompt("Hi you, guess a number!"); */
/* text = "Hi you, guess a number!";

do {
  guessNumber = prompt(text);
  if (guessNumber == 0) {
    alert("You can't continue the game!");
    break;
  } else if (number != guessNumber) {
    prompt("Guess another number!");
  }
} while (number != guessNumber); */
//console.log(guessNumber);
//break;

//STEG 1
/* let number = 5;
let guessNumber = prompt("Hi you, guess a number!");

do {
  if (guessNumber == 0) {
    alert("You can't continue the game!");
    break;
  } else if (guessNumber != number) {
    let answer = prompt("Wrong!, please guess another number!");
    console.log(answer);
    if (answer == 0) {
      alert("You can't continue the game!");
      break;
    } else if (answer == number) {
      alert("Congrats! that's a right number.");
      break;
    } else {
      alert("Sorry, still wrong!");
      break;
    }
  } else if (guessNumber == number) {
    //hrs 2 == lambangnya
    alert("Congrats! that's a right number.");
    break;
  }
} while (number != guessNumber); */

//STEG 1.5 B
/* let number = 5;
let guessNumber = prompt("Hi you, guess a number!");

do {
  if (guessNumber == 0) {
    alert("You can't continue the game!");
    break;
  } else if (guessNumber > number) {
    alert("You guessed too high!");
    let answer = prompt("Please guess another number!");
    //console.log(answer);
    if (answer == 0) {
      alert("You can't continue the game!");
      break;
    } else if (answer == number) {
      alert("Congrats! that's a right number.");
      break;
    } else {
      alert("Sorry, still wrong!");
      break;
    }
  } else if (guessNumber < number) {
    alert("You guessed too low!");
    let answer2 = prompt("Please guess another number!");
    if (answer2 == 0) {
      alert("You can't continue the game!");
      break;
    } else if (answer2 == number) {
      alert("Congrats! that's a right number.");
      break;
    } else {
      alert("Sorry, still wrong!");
      break;
    }
  } else if (guessNumber == number) {
    //hrs 2 == lambangnya
    alert("Congrats! that's a right number.");
    break;
  }
} while (number != guessNumber); */

//STEG 1.5 A
/* let number = 5;
let guessNumber = prompt("Hi you, guess a number!");

if (guessNumber == number) {
  //hrs 2 == lambangnya
  alert("Congrats! that's a right number.");
} else if (guessNumber == 0) {
  alert("You can't continue the game!");
} else if (guessNumber > number) {
  alert("You guessed too high!");
  prompt("Guess another number!");
} else if (guessNumber < number) {
  alert("You guessed too low!");
  prompt("Guess another number!");
} */

//STEG 2 A
/* const getRandomNumber = (max = 10) => {
  return Math.ceil(Math.random() * max);
};
//alert(getRandomNumber());
//console.log(getRandomNumber());
//let number = 5;
let guessNumber = prompt("Hi you, guess a number!");
alert(getRandomNumber());
console.log(getRandomNumber());
let getRandomNumbers = getRandomNumber();
if (guessNumber == getRandomNumbers) {
  //hrs 2 == lambangnya
  alert("Congrats! that's a right number.");
} else if (guessNumber == 0) {
  alert("You can't continue the game!");
} else if (guessNumber > getRandomNumbers) {
  alert("You guessed too high!");
  prompt("Guess another number!");
} else if (guessNumber < getRandomNumbers) {
  alert("You guessed too low!");
  prompt("Guess another number!");
} */

//STEG 2 B
//let number = 5;
/* const getRandomNumber = (max = 10) => {
  return Math.ceil(Math.random() * max);
};

const getNumb = getRandomNumber();

let number = [];
for (let i = 0; i < 1; i++) {
  number.push(getNumb);
}
console.log(number);

//let guessNumber = prompt("Hi you, guess a number!");

let guessNumber = Number(prompt("Hi you, guess a number!"));

let guessArr = [];
const pushGuess = () => {
  for (let i = 0; i < guessNumber.length; i++) {
    guessArr.push(guessNumber);
    console.log(guessArr); //Visa antalet gissningar när användaren har rätt gisning
  }
};
pushGuess();

do {
  if (guessNumber === 0) {
    alert("You can't continue the game!");
    break;
  } else if (guessNumber > getNumb) {
    alert("You guessed too high!");
    guessNumber = Number(prompt("Please guess another number!"));
    pushGuess();
    /* if (guessNumber === 0) {
      alert("You can't continue the game!");
      break;
    } else if (guessNumber === getNumb) {
      alert("Congrats! that's a right number.");
      break;
    } 
  } else if (guessNumber < getNumb) {
    alert("You guessed too low!");
    guessNumber = Number(prompt("Please guess another number!"));
    pushGuess();
    /* if (guessNumber === 0) {
      alert("You can't continue the game!");
      break;
    } else if (guessNumber === getNumb) {
      alert("Congrats! that's a right number.");
      break;
    } 
  }  else if (guessNumber === getNumb) {
    alert("Congrats! that's a right number.");
    break;
  } 
} while (getNumb !== guessNumber);

if (guessNumber === getNumb) {
  alert("Congrats! that's a right number.");
}*/
 

//Right Steps, STEP 3

const getRandomNumber = (max = 10) => {
    return Math.ceil(Math.random() * max);
  };
  
  let getNumb = getRandomNumber();
  
  /* let number = [];
  for (let i = 0; i < 5; i++) {
    number.push(getRandomNumber());
  }
  console.log(number);  */
  console.log(getNumb);
  
  
  let guessNumber = Number(prompt("Hi you, guess a number between 1-10!, and number 0 is for quit the game!"));
  
  let attempt = 0;
  /* let guessArr = [];
  const pushGuess = () => {
    for (let i = 0; i < guessNumber.length; i++) {
      guessArr.push(guessNumber);
      console.log(guessArr); //Visa antalet gissningar när användaren har rätt gisning
    }
  };
  pushGuess(); */ 
  
  do {    //Can use while (true) statement also
    attempt++   
    if (guessNumber === 0) {
      alert(`You quit the game now, after ${attempt} attempt.`);
      break;
    } else if (guessNumber > getNumb) {
      alert("You guessed too high!");
      guessNumber = Number(prompt("Please guess another number!"));
      //pushGuess();
      
    } else if (guessNumber < getNumb) {
      alert("You guessed too low!");
      guessNumber = Number(prompt("Please guess another number!"));
      //pushGuess();
    } 
  } while (getNumb !== guessNumber);
  


  do {

   // getRandomNumber();

  if (guessNumber === getNumb) {
    getNumb = getRandomNumber();
    attempt++  
    //getRandomNumber();
    //alert(`Congrats! You have guessed number ${guessNumber}, that's a right number.`);
    alert(`Congrats! you got the right number after ${attempt} attempt.`);
    console.log(getNumb);
    guessNumber = Number(prompt("Play a new game again, please guess a number between 1-10!"))
    
    //alert(`Congrats! you got the right number after ${attempt} attempt.`);
    //break; 
  };

} while (guessNumber === getNumb);
  
   