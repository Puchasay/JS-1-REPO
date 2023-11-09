let area = 80;
console.log("The total area is:", area); //Must use coma in front of area.., otherwise doesnt work

let x = 10;
//x++;
console.log(++x); //it means you do the plus first before x variable

let score = 50;
score += 5; //This is same as score = score + 5;
score -= 8;
score *= 2;
score /= 4;

console.log(score);

console.log("Your points is: " + 5); //5 will become a string when we use +
//or write like this
console.log(5 + " is your points");

//This is become math sign now:
console.log(5 - " is your points"); //it will return NaN, not a number

//null is that we put no value on the variable or missed a value

//undefined means that we havent put any value yet on that variable

let sum = 100;
console.log(typeof sum); //returns number

let word = "Batman";
console.log(typeof word); //returns string

console.log(20 + "20"); //returns 2020, it became a string

console.log(20 - "5"); //the string type became a number type & returns 15

//Convert string to number
console.log(Number("Batman")); //it returns NaN

//We can use parseInt to convert if "13 is nice" nut doesnt work on this "nice 13"
//but using number is a math way, for example: "10e2" it returns 1000 but using parseInt, it will return only 10, it wont count it

console.log(Number("25"));

//Convert number to string:
console.log(String(50.23));

//Booleans Datatype
//Booleans (null or undefined) or "" or no string inside string; it returns false
// only 0 which false, -number & plus number are true
//but " " is true, coz there is space inside string signs
//"I am a groot" returns true
//so "", 0, null, undefined are false in Booleans

//Template string:
//Concatenation
let test = "Math";
let student = "Mariah Carey";
let points = 85;

let msg1 =
  "Hi " +
  student +
  " your result on " +
  test +
  " test is " +
  points +
  " points";
console.log(msg1);
//ES6 Template Literals (Template Strings)
let msg = `Hi ${student} your result on ${test} test is ${points} points`;
console.log(msg);

//Array

let names = ["Joko", "Widodo", "Putin"];
console.log(names);

//If you write "" inside the array, the length is still 3

names[1] = "Momo";
console.log(names); //the 1 index changed to Momo

//Join is a non destructive method while length is a property
let students = names.join(", ");
console.log(names);
console.log(students);

console.log(names.indexOf("Momo")); //it returns -1 if theres no correct name inside the array, for ex: "Jim"

//Non destructive : concat is a non destructive method also.
let friends = ["Batman", "Joker", "Harley Quinn"];
console.log(names.concat(friends));
console.log(names);
console.log(friends);

// All methods down here are Destructive method, so push also, push is for adding a new at the end of array:
friends.push("Spiderman");
console.log(friends);
console.log(friends.join(", "));

//Pop is to take out 1 index from the end of the array
friends.pop();
console.log(friends);

//Unshift is to put new index from the beginning of the array
friends.unshift("Dream");
console.log(friends);

//shift to remove first index from an array
friends.shift();
console.log(friends);

//To replace a string from an array
friends[2] = "Potato";
console.log(friends);

//Logical Operators : && and ||
//&& and : need to be both side are true, || or : this means one of them should be true
