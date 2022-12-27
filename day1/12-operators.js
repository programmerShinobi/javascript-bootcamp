// let x = 10
// let y = +x;

// let s = '10';
// console.info(+s);

// let age = 25;
// ++age;
// console.info(age);


// // let f = faslse,
// //     t = true;

// console.info(+f);
// console.info(+t);

let x = 10;
let doubleX = ++x;
let trippleX = x++;
console.info(doubleX);
console.info(trippleX);
console.info();

let weight = 90;
weight = ++weight + 5;

let w = 90;
w = w++ + 5;

console.info(weight);
console.info(w);

let a = 10;
let b = '10';

if (a == b) {
    console.info("oke");
} else {
    console.info("tidak oke");
}

if (a === b) {
    console.info("oke");
} else {
    console.info("tidak oke");
}


let name1 = 'alice',
    name2 = 'bob';
let result = name1 < name2;

console.info(result);