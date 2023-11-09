/* let title = "Love of my life";
let author = "Shidney Sheldon";
let like = "20.000";

//concatenation way:
// let result =
//   "The book with the title " +
//   title +
//   " by author " +
//   author +
//   " has " +
//   like +
//   " likes";
// console.log(result);

//template string way:
let result2 = `The book with the title ${title} by ${author} has ${like} likes`;
console.log(result2);

//array:
let desserts = ["flan", "pannacotta", "macaroon"];
console.log(desserts);

//arrays properties:
console.log(desserts.length);

//arrays methode:
console.log(desserts.join(", "));

console.log(desserts.indexOf("pannacotta"));

//methode concat, just join some string to the array but just temporary
let result4 = desserts.concat(["tiramisu", "kanelbulle"]);
console.log(result4);
console.log(desserts.concat(["tiramisu", "kanelbulle"]));
console.log(desserts);

//methode push added a new to the array
let result3 = desserts.push("tiramisu");
console.log(result3);
console.log(desserts);

//methode pop also destructive method, it changes the original array
let result5 = desserts.pop();
console.log(desserts);
console.log(result5);

//Booleans (true or false):
let cars = ["volvo", "toyota", "mazda"];
let result6 = cars.includes("volvo");
let result7 = cars.includes("BMW");
console.log(result6);
console.log(result7);

let hisName = "David Beckham";
let result8 = hisName.includes("d"); //includes is case sensitive, so it doesnt matter with big D or small d
console.log(result8);

let result9 = hisName.includes("@");
console.log(result9); */

//Comparisons operators:
/* let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age > 26);
console.log(age < 26);
console.log(age != 25);
console.log(age != 27);
console.log(age >= 25);
console.log(age <= 25);

let name2 = "mary";
console.log(name2 == "mary");
console.log(name2 == "Mary"); //comparisons operators are case sensitive
console.log(name2 > "Mary"); //it returns true coz small character m is greater than uppercase M
console.log(name2 > "cherry"); //character m is greater than c
console.log(name2 > "Cherry"); //it returns true coz small character m is greater than uppercase C
console.log(name2 > "Nary"); //it returns true coz small character m is greater than uppercase N */
/* 
//loose comparisons: only same value, but JS can change the type of the value
let age2 = 30;
console.log(age2 == 30);
console.log(age2 == "30"); //it returns true coz JS convert the string type to number type
console.log(age2 != "30");

//strict comparisons: same value & same type
console.log(age2 === 30);
console.log(age2 === "30");
console.log(age2 !== "30");

//Type conversion: string is always true, meanwhile empty string as '', is false.
//0 (zero) always false, meanwhile minus and plus number are true

let number = 100;
number = String(number);
console.log(number); //if its number then will print out as blue color 100

let hundred = "100";
hundred = Number(hundred);
console.log(hundred);

let convert = "100";
let result = convert + 1; //it will return 1001, coz it will convert to string type and not number type
console.log(result);

let exempel = "volvo";
let result2 = Number(exempel);
console.log(result2); //it will return NaN, coz string words cant convert to number type

let number2 = 100;
number2 = Boolean(number2);
console.log(number2, typeof number2); //what type of the datatype?

let word = "matic";
word = Boolean(word);
console.log(word, typeof word); */

//for Loop: 1 iteration same as 1 cycling, 1 time of loop, when it finish i=0.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Loop finished");

let names = ["Jane", "Taufik", "Nona", "Kris"];
for (let i = 0; i < names.length; i++) {
  //console.log(i);
  console.log(names[i]);
}
console.log("Loop finished");

//While loop:

//let i = 0;

/* while (i < 5) {
  console.log("i is: " + i);
  i++;
} */

const newName = ["Tom", "Jerry", "Mickey", "Mouse"];

let i = 0;

while (i < newName.length) {
  console.log(newName[i]);
  i++;
}

//Conditional statements or If statement:
const age = 17;

if (age < 18) {
  console.log("You're not allowed to visit this page!");
}

const colors = ["pink", "green", "purple", "white"];

if (colors.length > 3) {
  console.log("That's lot of colors");
}

const pass = "pass12!new";

if (pass.length >= 8) {
  console.log("That's a good password");
}

//Multiple different conditions:
const pass1 = "mypass";

if (pass1.length >= 12) {
  //1st condition is the 1st one run, so its for the most important condition than others!!
  console.log("Your password is strong enough");
} else if (pass1.length >= 8) {
  console.log("Your password isn't strong enough");
} else {
  console.log("Your password is too weak");
}
