/**
 * Lösenordskollen med funktioner
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.   //temukan huruf special & brp bnyk jml nya
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * STEG 3 🌟
 * Refaktorera funktionen till att räkna antalet specialtecken (inte bara
 * antalet unika).
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två (unika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

const passwords = [
  "password", // 🚨
  "p@*swd", // 🔐
  "pa$sword", // 🔐
  "p@ssw%rd", // 🔐
  "pa$$wd", // 🔐 only on steps 3
  "secretpassword", // 🚨
  "secret-password", // 🔐
  "such-password-much-secure-very-long", // 🔐
  "$$$", // 🚨
];

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

let countPass = 0;
//const checkPassword1 = () => {
/* for (i = 0; i < specialChars.length; i++) {
  const specialChar = specialChars[i];
  console.log(i, specialChar);
  const passName = passwords[i];
  console.log(passName);
  if (passName.includes(specialChar)) {
    countPass++;
    console.log(passName, "You have special chars on you password");
  }
} */
//break;

/*   if (passName.length > 16) {
    countPass++;
    console.log(countPass, passName, "Your password is valid");
    break;
  } */
//}

//let countPass = 0;
const checkPassword1 = (passName) => {
  for (let i = 0; i < specialChars.length; i++) {
    const specialChar = specialChars[i];
    //console.log(i, specialChar);
    //const passName = passwords[i];
    //console.log(passName);
    if (passName.includes(specialChar)) {
      countPass++;
      console.log(passName, "You have special chars on you password");
      if (passName === 2) {
        break;
      }
    }
    return countPass;
  }

  //const checkPassword = (howMany) => {
  for (i = 0; i < passwords.length; i++) {
    const passName = passwords[i];
    //console.log(passName);
    //let howMany = passName.length;
    //console.log(howMany);

    if (passName.length >= 16) {
      console.log("Your password is valid", passName);
      countPass++;
      //break;
    } else if (passName.length > 12 && passName.includes("-")) {
      console.log("Your password is valid", passName);
    }
  }
};

//passName.length > 12 && passName.includes("-");
//};
//howMany > 12 && passName.includes("-")) ||

//checkPassword(16);

/* let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
} */

passwords.forEach(myFunc);
function myFunc() {
  if (passwords.length > 16) {
    console.log("Your password is valid", passwords);
  }
}

//console.log(passwords.forEach(myFunc));

//Step debugging, search on google
