//Better to write your JS codes here in the JS file
/*You can use this to create comment also*/

//alert("Hi you there!!");

//write out a messsage on website console
//console.log("Hi from my javascript file");

//so msg is a variable, variable is a container to store a data
let msg;
msg = "Hi from my javascript file";
//console.log(msg);

//this is replace the first msg varibale.
msg = "Hi from my compt";
console.log(msg);

//firstName wrote as camel case
let firstName = "Mariah";
console.log(firstName);

firstName = "Kimmy";
console.log(firstName);

//The last_name wrote as snake case
let last_name = "Carey";

console.log(firstName + last_name);
console.log(firstName + " " + last_name);

let fullName = firstName + " " + last_name;
console.log(fullName);

//length is properties(egenskaper) of variable fullName
console.log("The length of your full name is:" + fullName.length);

//while toUpperCase() is a method on the string
console.log("I scream your name " + fullName.toUpperCase());
console.log("Just whisper your name " + fullName.toLowerCase());

let newName = fullName.replace("Kimmy", "Jonny");
console.log(newName);
console.log(fullName);

let aName = fullName.replace("i", "a");
console.log(aName);

//index always count from 0, index refers to its position

let email;
//email = "jn@thehiveresistance.com";
//email = "some@dude.org";
//email = "bgates@microsoft.com";
email = "some.brittish.dude@bt.co.uk";

let indexDot = email.lastIndexOf(".");
//indexDot++; this one doesnt need

console.log("The index of the dot on the domain is: " + indexDot);
console.log(email.slice(indexDot + 1));
console.log("The domain name is: " + email.slice(indexDot + 1));

//Can write like this also tapi ga bagus, lebih baik pakai variable indexDot
console.log(email.slice(email.lastIndexOf(".") + 1));
