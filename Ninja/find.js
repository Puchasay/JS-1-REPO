//Find method on an array, is a method for finding an element on the array, if already met it then wont runs the rest
//of elements in the arrray

const numbers = [10, 30, 22, 55, 40, 80];

const findNumb = numbers.find((number) => {
    return number > 50;    //tetap hrs pake return kl syntax full bgini, krn ini callback function
});

// const findNumb = numbers.find(number => number > 50);
console.log(findNumb);