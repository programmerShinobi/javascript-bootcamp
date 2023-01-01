/**
 * Array.fill()
 * Method ini akan mengubah array yang asli,
 * sehingga semua elemen dalam array tersebut
 * akan diisi dengan nilai yang ditentukan.
 * 
 */

let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.info(arr);
// arr akan berisi [0, 0, 0, 0, 0]

let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2);
console.info(arr2);
// arr2 akan berisi [1, 2, 0, 0, 0]

let arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 2, 4);
console.info(arr3);
// arr3 akan berisi [1, 2, 0, 0, 5]
