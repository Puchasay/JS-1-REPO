/**
 * Guess the number
 *
 * STEG 1
 * ✅ Sätt ett tal i en variabel.
 * ✅ Be användaren att gissa talet med hjälp av `prompt()`.
 * ✅ Om användarens gissning är fel, fråga efter en ny gissning.
 * ✅ Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * ✅ Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * ✅ Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * ✅ Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * ✅ Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * ✅ STEG 4 
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet.
 *
 * STEG 5
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.✅
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 *
 */

// Get a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}


let numberToGuess = getRandomNumber();
let continueGame = true;
let attempts = 0;
let scores = 0;
let totalScores = [];


for (let i = 0 ; i < attempts ; i++) {
    totalScores.push(scores);
    console.log(totalScores);
}


console.log("🐆😈 numberToGuess:", numberToGuess);


//let guess = Number( prompt("Please guess a number between 1-10. Enter 0 to quit.") );

while (continueGame) {
	let guess = Number( prompt("Please guess a number between 1-10. Enter 0 to quit.") );
	console.log("You guessed: ",  typeof guess, guess);

	// Increase number of attempts
	// attempts++;

    
	if (guess === numberToGuess) {
		// Guess was correct
        numberToGuess = getRandomNumber();
		attempts++;
		console.log("Guess was correct! 🥳");
        scores+=5;
        console.log("Congrats! Your total scores now is : ", scores);
        alert(`Great success! You guessed the correct answer after ${attempts} attempt(s). Your highscore is : ${scores}`);
        console.log("New random number : ", numberToGuess);
        //alert(`Congrats! Your total scores now is :${scores}`);
        alert("Play a new game again!");
		//continueGame = false;

	} else if (guess === 0) {
		// User rage-quit
		console.log("Your guess number was 0, quitting game");
		alert(`Y U GIVE UP AFTER ONLY ${attempts - 1} ATTEMPT(S)?! and Your TOTAL SCORE is : ${scores}`);
       // alert("Your total score is :", scores);
        console.log("your scores now : ", scores);
		continueGame = false;

	} else if (guess > numberToGuess) {
		// Guess was too high
		attempts++;
		console.log("Guess was too high");
        scores--;
        console.log("your scores now : ", scores);
		alert("Guess was too high");

	} else if (guess < numberToGuess) {
		// Guess was too low
		attempts++;
		console.log("Guess was lower than GlocalNet");
		scores--;
        console.log("your scores now : ", scores);
        alert("Guess was too low");

	} else {
		console.log("That's not a number");
		alert("That's not a number");

	}

}
    
console.log("Game ended");


/* do {

    if (guess === numberToGuess) {
      //alert(`Congrats! You have guessed number ${guessNumber}, that's a right number.`);
      alert(`Congrats! you got the right number after ${attempt} attempt.`);
      guess = Number(prompt("Play a new game again, please guess a number between 1-10!"))
      attempt++   
      //alert(`Congrats! you got the right number after ${attempt} attempt.`);
      //break; 
    };

  } while (guess === numberToGuess); */