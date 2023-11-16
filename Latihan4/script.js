/**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * STEG 2
 * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
 * hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	 {
	 	hobbies: ["Be cute"],
	 	species: "Old kitten",
	 	age: 9,
	 	name: "Meow Sr",
		sound: "meooow!",
	 	meowCounter: 0,
	 	speak() { // same as writing "speak: function() {}"
	 		this.meowCounter++;
	 		console.log(this.sound);
	 		console.log(`Meowed times today: ${this.meowCounter}`);
	 	}
	 }
];

/* console.log(document.querySelector("#petslist"));

let petsList = document.querySelector("#petslist");

let liChild = document.createElement("li");

console.log(petsList.appendChild(liChild));

let setLi = petsList.appendChild(liChild); */

//let putText = setLi.append(`${pets[0].name} is a ${pets[0].species} of ${pets[0].age} year(s) old.`);

//console.log(putText);


//These are the right codes
/* let petsListEl = document.querySelector("#petslist");   //id: petList

pets.forEach( pet => {
    //let setLi1 = petsList.appendChild("li");
    let liEl = document.createElement("li");
    let setLi = petsListEl.appendChild(liEl);
    setLi.innerText = (`${pet.name} is a ${pet.species} of ${pet.age} years old.`);

    //const ownerName = pets.hasOwnProperty("owner");
    const ownerName = Boolean(pet.owner);
    //console.log(ownerName);

    const petHobby = Boolean(pet.hobbies);
    //console.log(petHobby);

    if (ownerName && petHobby)  {
        setLi.innerText += (` His owner is ${pet.owner.name} and his favorite hobbies are to ${pet.hobbies.join(", ")}.`);
    } else if (petHobby) {
        setLi.innerText += (` And his favorite hobby is to ${pet.hobbies}.`);
    }
}) */

//Do like this also, using innerHTML does work.

let petListEl = document.querySelector("#petslist");

pets.forEach (pet => {
    const petOwnerName = pet.owner
    ? pet.owner.name
    : "missing";

    petListEl.innerHTML += `<li>${pet.name} is a ${pet.species} of ${pet.age} years old. And his owner is ${petOwnerName}. </li>`;
}) 

