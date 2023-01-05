/**
 * Array.map()
 * Method yang akan mengembalikan sebuah array baru
 * yang merupakan hasil dari pemanggilan sebuah function
 * yang disediakan sebagai argumen pada setiap elemen array yang ada.
 * Contohnya, kita bisa menggunakan Array.map()
 * untuk mengubah setiap elemen dari sebuah array
 * menjadi elemen yang telah diformat dengan cara tertentu
 * 
 */


const numbers = [1, 2, 3, 4];

// Menggunakan Array.map() untuk mengalikan setiap elemen dengan 2:
const doubledNumbers = numbers.map(number => number * 2);

console.info(doubledNumbers); // Output: [2, 4, 6, 8]

