/**
 * Array.keys()
 * Method yang mengembalikan sebuah object Array Iterator
 * yang berisi indeks-indeks dari elemen-elemen array.
 * Array Iterator ini bisa digunakan
 * untuk iterasi atau looping melalui sebuah array.
 * 
 */


let array1 = ["apple", "banana", "orange"];
let iterator = array1.keys();

console.log(iterator.next().value); // output: 0
console.log(iterator.next().value); // output: 1
console.log(iterator.next().value); // output: 2

console.info(`\n`);//----------------------------------------------

let array2 = ["apple", "banana", "orange"];

for (let key of array2.keys()) {
    console.log(key); // output: 0 1 2
    /**
     * output :
        0
        1
        2
    */
}
