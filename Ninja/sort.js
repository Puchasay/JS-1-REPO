//Sort and Reverse method on an array
//Sort method is to sorting the element in alfabeth (a-z) and for number from small to big (but only on the first number
//on it position)
//Then Reverse method is to change position the actual position of the element on the array 

const numbers = [33, 20, 10, 5, 40, 65, 77, 85, 90];  //The number 5 wont be on the first position 

numbers.sort();  //sort method is destructive method
console.log(numbers);

//numbers.reverse();
console.log(numbers);

const names = ["Carry", "Posh", "Agatha", "Tim", "Jolly", "Marry"];

names.sort();   //nyusun element dlm array scr alfabet
console.log(names);

names.reverse();   //posisi dr blkg jadi ke dpn
console.log(names);

//To solve the problem about number 5, we can by using this method instead:

numbers.sort((a, b ) => a - b );   //it returns a which is small number first, a utk angka kecil
console.log(numbers);

numbers.sort((a, b) => b - a);  //it returns b, which is large number first
console.log(numbers);

numbers.reverse();
console.log(numbers);

//Long syntax

const players = [
    {name: "Tom", score: 20},
    {name: "Jerry", score: 5},
    {name: "Mickey", score: 10},
    {name: "Mouse", score: 30}
];

const sortNumb2 = players.sort((a, b) => {
    if (a.score > b.score) {
        return -1;   //klo mau angka kecil dl berarti pilih a yg return 1
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0
    }
})

console.log(sortNumb2);