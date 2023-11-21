//Reduce method is for accumulation of number inside the array to become 1 number
//for example, in stock , how many total in stock all the stuff inside an array
//or how much total stuff worht in price (stock x price)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10