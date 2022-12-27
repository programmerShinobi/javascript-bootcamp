// Operator => Logical

let isTrue = true && true;
console.info(isTrue); // return : true

isTrue = 10 === 10 && 10 !== 11;
console.info(isTrue); // return : true

let isFalse = true && false;
console.info(isFalse); // return : false

isFalse = false && true;
console.info(isFalse); // return : false

isFalse = false && false;
console.info(isFalse); // returnm: false

let orTrue = true || false;
console.info(orTrue); // return : true

orTrue = false || true;
console.info(orTrue); // return : true

let orFalse = false || false;
console.info(orFalse); // return : false

// conditional statement
const isStudent = true;
if (isStudent) {
    console.info(`Student is ${isStudent}`); // return : true
}


