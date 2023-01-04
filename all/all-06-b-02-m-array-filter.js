/**
 * Array.filter()
 * Method ini untuk membuat sebuah array baru
 * yang terdiri dari semua elemen array asli
 * yang lulus tes yang ditentukan oleh sebuah fungsi.
 * Fungsi terebut untuk setiap elemen dalam array,
 * dan jika hasil dari pemanggilan fungsi tersebut
 * bernilai true, maka elemen tersebut akan dimasukkan ke dalam array baru yang
 * dikembalikan oleh Array.filter().
 * 
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.info(evenNumbers);
// evenNumbers adalah [2, 4, 6, 8, 10]

//----------------------------------------------

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 18 },
];
const adults = people.filter(person => person.age >= 30);
console.info(adults);
/**
[
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 40 },
    { name: 'Diana', age: 35 }
]
 */
