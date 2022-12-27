// Operator => Greater, Less, Equility
// Greater
console.info(15 > 12); // return : true

console.info(10.5 <= 10.9); //return : true

let a = 10;
let b = '10';

if (a == b) {
    console.info("oke");
} else {
    console.info("tidak oke");
}

let name1 = 'alice',
    name2 = 'bob';
let result = name1 < name2;

console.info(result);

// equality operator
console.info(12 == "12"); // return : true

// strict equality operator
console.info(12 === 12); //return : true

console.info(12 === "12"); // return : false

console.info(12 !== "12"); //return : true


if (a === b) {
    console.info("oke");
} else {
    console.info("tidak oke");
}

// +
let f = false;
t = true;

console.info(+f);
console.info(+t);

let x = 10
let y = +x;

let s = '10';
console.info(+s); //return : 10

// ++
let age = 25;
++age;
console.info(age); // return : 26

x = 10;
let doubleX = ++x;
let trippleX = x++;
console.info(doubleX); //return 11
console.info(trippleX); // return 11

let weight = 90;
weight = ++weight + 5;

let w = 90;
w = w++ + 5;

console.info(weight); // return : 96
console.info(w); // return : 95
