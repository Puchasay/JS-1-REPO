//Find method on an array, is a method for finding an element on the array, if already met it then wont runs the rest
//of elements in the arrray

const numbers = [10, 30, 22, 55, 40, 80];

const findNumb = numbers.find((number) => {
    return number > 50;    //tetap hrs pake return kl syntax full bgini, krn ini callback function
});

// const findNumb = numbers.find(number => number > 50);
console.log(findNumb);


//klo qt taruh condition yg ga bs dicapai, ttp akan return an empty array
//misalnya, find number > 100, ga ada di dlm array, bakal return an empty array
//klo filter, kasih bbrp jawabn dr array, klo find cm return 1 jwban, dan ga run the next lg