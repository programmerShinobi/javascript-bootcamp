/**
 * Array.isArray()
 * Method yang digunakan
 * untuk memeriksa apakah sebuah object
 * adalah sebuah array atau bukan.
 * Fungsi ini akan mengembalikan nilai true
 * jika object yang diperiksa adalah sebuah array,
 * dan false jika sebaliknya.
 * 
 */

let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // output: true

let notArr = {};
console.log(Array.isArray(notArr)); // output: false

let alsoNotArr = "123";
console.log(Array.isArray(alsoNotArr)); // output: false