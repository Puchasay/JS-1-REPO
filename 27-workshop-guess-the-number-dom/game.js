/**
 * Guess the number - DOM Edition
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visar utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-fält där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 * (T.ex. ”Du gissade rätt!” eller ”Du gissade fel!”)
 * Ska så klart uppdateras varje gång användaren gissar.
 *
 * STEG 2
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 3
 * Visa antalet gissningar hittills i ett HTML-element.
 * Ska så klart också uppdateras varje gång användaren gissar.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */




//Giving a random number for the user to guess
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let randomNum = getRandomNumber();
console.log(randomNum);

const inputEl = document.querySelector("#inputNum");
const formEl = document.querySelector("#theForm");
const alertEl = document.querySelector("#giveAlert");
const newGameBtn = document.querySelector("#newGameBtn");
const attemptEl = document.querySelector("#attemptNum");

let attempt = 0;

attemptEl.innerText += 0;


//Fetch a number which user has guessed
formEl.addEventListener("submit", (e) => {

e.preventDefault();  //harus pake ini, klo ga, ga jadi, number ny ga bs masuk console.log

let inputVal = inputEl.value;
console.log(inputVal);
let inputValNew = Number(inputVal);
console.log(inputValNew);

//If statement for checking if the user guess right or wrong number
if (randomNum === inputValNew) {

	attemptEl.innerText = "";
	attempt++;
	//console.log(`Congratulation, finally you guessed the right number after ${attempt} attempt`);

	//Showing how many trying that user done 
	attemptEl.innerText += `${attempt}`;

	alertEl.innerText += "Congratulations you guessed the right number!!";
	alertEl.classList.add("alert");
	alertEl.classList.add("alert-info");


	inputEl.value ="";

	//Set time out so that the alert box gone
	setTimeout(() => {
		alertEl.innerText ="";    //kode di dlm setTimeout akan di kör selama 2 detik ato 2000ms
		alertEl.classList.remove("alert");	
		alertEl.classList.remove("alert-info");	
	}, 3000)   
	
} else if (inputValNew > randomNum) {

	attemptEl.innerText = "";
	attempt++;
	//console.log(`Sorry, still wrong number and you have tried ${attempt} attempt`);
	attemptEl.innerText += `${attempt}`;

	alertEl.innerText += `You guessed too high!!`;
	alertEl.classList.add("alert");
	alertEl.classList.add("alert-warning");

	setTimeout(setTime, 2000);
	
	/* setTimeout(() => {
		alertEl.innerText = "";
		alertEl.classList.remove("alert");
		alertEl.classList.remove("alert-warning");
	}, 2000) */

} else {

	attemptEl.innerText = "";
	attempt++;
	//console.log(`Sorry, still wrong number and you have tried ${attempt} attempt`);
	attemptEl.innerText += `${attempt}`;

	alertEl.innerText += `You guessed too low!!`;
	alertEl.classList.add("alert");
	alertEl.classList.add("alert-warning");


	setTimeout(setTime, 2000);

	/* setTimeout(() => {
		alertEl.innerText = "";
		alertEl.classList.remove("alert");
		alertEl.classList.remove("alert-warning");
	}, 2000) */
}


//This is for wrong guessing if statement
/* else {

	attempt++;
	console.log(`Sorry, still wrong number and you have tried ${attempt} attempt`);

	alertEl.innerText += "You guessed wrong!! Try again!";
	alertEl.classList.add("alert");
	alertEl.classList.add("alert-danger"); 

	setTimeout(() => {
		alertEl.innerText ="";
		alertEl.classList.remove("alert");	
		alertEl.classList.remove("alert-danger");
	}, 2000)
} */
})


//Set a new random number again on the play new game button
newGameBtn.addEventListener("click", () => {
	randomNum = getRandomNumber();
	console.log(randomNum);

	attempt = 0;
	attemptEl.innerText = 0;
})


//Make setTimeout function to a variable, so it become more simple
let setTime = () => {
	alertEl.innerText = "";
	alertEl.classList.remove("alert");
	alertEl.classList.remove("alert-warning");
};

setTimeout(setTime, 2000);  //method from js
setTime();    //harus dpanggil function nya jg

/* setTimeout(() => {
	alertEl.innerText = "";
	alertEl.classList.remove("alert");
	alertEl.classList.remove("alert-warning");
}, 2000) */
