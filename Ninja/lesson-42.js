//Math object

//We can use Match object on JS, for example:

let area = 7.7;

console.log(Math.round(area)); //it will round it up if close to upper tal, or visa versa

console.log(Math.floor(area)); //this Math.floor is round it down the number, it returns 7

console.log(Math.ceil(area)); //it round it up, it returns 8

console.log(Math.trunc(area)); //it take away the decimal

Math.random(); //its random number between 1 & 0 with decimal, so you need to make it round first then times 10 or 100 or any to your like

let random = Math.random();

console.log(Math.round(random * 10)); //This is random number between 1-10

//DOM (Document Object Model)

//You can write on console, document, and ti will show so many things object for document, one of
//them is document.URL or document.location
//There are many methods can used also, like: document.getElementbyId

let para = document.querySelector("p"); //Take the first p tag and ignore the rest p tag
console.log(para);

let paraAll = document.querySelectorAll("p"); //Take all p tags on the DOM
console.log(paraAll);

let try1 = document.querySelector("body > h1"); //You can copy selector on the inspect DOM directly, this is select h1 tag inside of the body tag
console.log(try1);
