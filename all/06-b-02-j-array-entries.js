/**
 * Array.entries()
 * method dari kelas Array yang digunakan
 * untuk mengembalikan sebuah iterator
 * yang bisa digunakan untuk menelusuri seluruh elemen
 * dalam sebuah array dalam JavaScript.
 * Setiap item yang diiterasi oleh iterator tersebut
 * merupakan sebuah array dengan dua elemen,
 * yaitu indeks dari elemen tersebut dalam array,
 * dan elemen itu sendiri
 * 
 */

let arr = [1, 2, 3, 4, 5];
let iterator = arr.entries();

console.log(iterator.next().value); // [0, 1]
console.log(iterator.next().value); // [1, 2]
console.log(iterator.next().value); // [2, 3]
console.log(iterator.next().value); // [3, 4]
console.log(iterator.next().value); // [4, 5]
console.log(iterator.next().value); // undefined

for (let [index, elementArray] of arr.entries()) {
    console.log(`Index: ${index}, Element: ${elementArray}`);
}

/**
Index: 0, Element: 1
Index: 1, Element: 2
Index: 2, Element: 3
Index: 3, Element: 4
Index: 4, Element: 5
 */

