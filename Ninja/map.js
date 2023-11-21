//Map method on an array, this is different than filter, map is mapping items inside an array, did something more to the element
// meanwhile filter method just filtering elements to a condition

const prices = [20, 10, 35, 30, 50, 60];

const salePrices = prices.map((price) => {
    return price / 2; 
})

//Shorter code syntax
const salePrices2 = prices.map(price => price / 2);

console.log(salePrices);
console.log(prices);

const products = [
    {name: "Lolipop", price: 20},
    {name: "Marabou cookies", price: 30},
    {name: "Lays", price: 34},
    {name: "Choco puding", price: 40}
]; 

const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return {name : product.name, price : product.price / 2}; 
    } else {
        return product
    }

})
console.log(products);
console.log(saleProducts);

//With map, kita jg bisa push 1 property dr an array, dan 1 properti dari smua element di array ter push di array baru
//pake map, tetep isi array return sama. ga bisa utk pilih salahsatu element
//map, utk mengubah di dlm array