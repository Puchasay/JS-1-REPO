/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
password = "pa$@wor"; // giltigt   I add this  dw

//password = "password"; // inte giltigt  w
//password = "pa$sword"; // giltigt   w
//password = "p@ssw%rd"; // giltigt   w
//password = "pa$$word"; // giltigt    w
//password = "secretpassword"; // inte giltigt  w
//password = "secret-password"; // giltigt  w
//password = "such-password-much-secure-very-long"; // giltigt   w

const specialChars = [
  "@",
  "$",
  "%",
  "*",
  "^",
  "<",
  ">",
  "?",
  "!",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "'",
];

/* for (i = 0; i < specialChars.length; i++) {
	console.log(password.includes(specialChars[i]));
	let x = password.includes(specialChars[i]);
	if (x === true) {
		console.log(specialChars[i]);
	}
} */

/* let minPass = 6;
let minPass2 = 8;
let minPass3 = 12;
let minPass4 = 16;
let minChar = 2;
let minChar2 = 1; */

console.log(specialChars.length);

console.log(`🕵🏻 Checking password '${password}'`);
console.log(password.length);

// Skriv din kod här

/* for (i = 0; i < specialChars.length; i++) {
	//console.log(password.includes(specialChars[i]));
	 let x = password.includes(specialChars[i]);
	//console.log(x);
	if (password.length >= 6 && password.length < 8 && x >= 2) {
		console.log("Your password is ok");
	}
	}  */

let x = 0;
for (i = 0; i < specialChars.length; i++) {
  if (password.includes(specialChars[i])) {
    // yep, it did. set status variable to true!
    x++;
  }
}
console.log(x);
if (password.length >= 6 && password.length < 8 && x >= 2) {
  console.log("Your password is very good and really strong");
} else if (password.length < 12 && x >= 1) {
  console.log("Your password is strong enough");
} else if (password.length < 16 && password.includes("-")) {
  console.log("Your password is quite strong");
} else if (password.length >= 16) {
  console.log("Your password is really long");
} else {
  console.log("Your password is too weak");
}

/* for (i = 0; i < specialChars.length; i++) {
	//console.log(password.includes(specialChars[i]));
	let x = password.includes(specialChars[i]);
	//console.log(x);
	if (password.length >= 6 && password.length < 8 && x >= 2) {
		console.log("Your password is very good and really strong");
	} else if (password.length < 12 && x >= 1) {
		console.log("Your password is strong enough");
	} else {
		console.log("Your password is too weak");
	}
} */

/* if (password.length < 16 && password.includes("-")) {
	console.log("Your password is quite strong");
} else if (password.length >= 16) {
	console.log("Your password is really long");
} else {
	console.log("Your password is too weak");
}
 */
