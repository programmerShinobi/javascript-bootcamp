/**
 * Array.every()
 * Method ini akan mengembalikan sebuah boolean
 * yang menunjukkan apakah semua elemen dalam array
 * tersebut memenuhi kondisi tersebut atau tidak.
 * 
 */

let arr = [1, 2, 3, 4, 5];
let result = arr.every(elementArray => elementArray % 2 === 0);
console.info(result); // false
/**
 * result akan bernilai false,
 * karena tidak semua elemen dalam array arr
 * merupakan bilangan genap
 *  
 */


let result2 = arr.every(elementArray => elementArray < 6);
console.info(result2); // true
/**
 * result2 akan bernilai true,
 * karena semua elemen dalam array arr
 * lebih kecil dari 6
 *  
 */
