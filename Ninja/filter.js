//Lesson 71 on Net Ninja Course about Filter method on an array, filter is to filter all the elements by a certain condition

const scores = [21, 30, 15, 35, 10, 40, 55];

const filterScores = scores.filter((score) => {   //With callback function, it means using return
    return score > 20;
})

//Shorter syntax
const filterScores2 = scores.filter(score => score > 20);

console.log(filterScores);
console.log(scores);   //So filter method isnt destructive method for an array

//Short syntax for using filter method on an array

const users = [
{name : "Mickey Mus", premium : true},
{name : "Elton John", premium : true},
{name : "Mariah Carey", premium : false},
{name : "Donald Duck", premium : true},
{name : "Santa Claus", premium : false}
];

// const usersFilter = users.filter((user) => {
//     return user.premium;    //filter users which has premium true
// });

// console.log(usersFilter);

//I can make it more simple syntax by

/* const usersFilter = users.filter(user=> {
    return user.premium;
}); */

//or
const usersFilter = users.filter(user => user.premium);

console.log(usersFilter);