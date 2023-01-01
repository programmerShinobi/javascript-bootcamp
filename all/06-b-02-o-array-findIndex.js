/**
 * Array.findIndex()
 * Method untuk untuk mencari indeks elemen pertama dalam array
 * yang lulus tes yang ditentukan oleh sebuah fungsi.
 * Fungsi tersebut akan dipanggil untuk setiap elemen dalam array,
 * dan jika hasil dari pemanggilan fungsi tersebut
 * bernilai true, maka indeks elemen tersebut
 * akan dikembalikan oleh Array.findIndex().
 * Jika tidak ada elemen yang lulus tes,
 * maka Array.findIndex() akan mengembalikan -1.
 * 
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const indexOfFirstLargeNumber = numbers.findIndex(number => number > 5);
console.info(indexOfFirstLargeNumber);
// indexOfFirstLargeNumber adalah 5

//-----------------------------------------------
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 18 },
];
const indexOfCharlie = people.findIndex(person => person.name === 'Charlie');
console.info(indexOfCharlie)
// indexOfCharlie adalah 2
