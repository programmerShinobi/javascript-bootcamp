// number
const n = 150.86;
console.info(typeof n); // return : number

// convert value to float
console.info(parseFloat(n)); // return : 150.86

// convert to integer
console.info(parseInt(n)); // return : 150

// convert string to number
const num = "3.14159";
console.info(Number(num)); // return : 3.14159

// conver string to number
const s = "Hello";
console.info(Number(s)); // return : NaN (Not a Number)

// round number
const price = 150.98454;
console.info(price.toFixed(3)); // return : 150.985

// Cek kondisi apakah number atau bukan
console.info(isNaN("hello")); // return : true
console.info(isNaN(45)); // return : false
console.info(isNaN("45")); // return : false

