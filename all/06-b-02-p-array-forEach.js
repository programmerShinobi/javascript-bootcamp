/**
 * Array.forEach()
 * Method yang dapat digunakan
 * untuk melakukan iterasi
 * terhadap setiap elemen pada array tersebut.
 * Method ini akan mengeksekusi sebuah function
 * yang telah ditentukan untuk setiap elemen pada array tersebut
 * 
 */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.info(number);
});

console.info(`\n`)

numbers.forEach(number => {
    console.info(number);
});

