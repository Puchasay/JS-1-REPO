
//How to clone an array, cloing products array and put it on a new array newProducts, ini tidak merubah array yg lama
const newProducts = [ ...products ];

//jadi kl km products.pop() tidak akan sama hsl ny dg newProducts

products === newProducts   //it will return False stlh di cloning