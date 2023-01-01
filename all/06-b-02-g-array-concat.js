/**
 * Array.concat();
 * Method ini tidak merubah array yang asli,
 * tetapi akan mengembalikan sebuah array baru
 * yang merupakan hasil penggabungan
 * dari array-array Yang diinputkan
 * 
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let newArray = arr1.concat(arr2, arr3);
// newArray akan berisi [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.info(newArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.info(arr1); // [1, 2, 3]

