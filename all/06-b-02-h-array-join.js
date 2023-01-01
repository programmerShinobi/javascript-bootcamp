/**
 * Array.join()
 * Method ini akan mengembalikan sebuah string
 * yang terdiri dari semua elemen array yang diinputkan,
 * dipisahkan oleh sebuah pembatas yang ditentukan.
 * Pembatas tersebut bisa kamu tentukan sendiri,
 * atau menggunakan pembatas default yang karakter koma (",")
 * 
 */

let arr = [1, 2, 3, 4, 5];
let str = arr.join();
console.info(str);
// str akan berisi "1,2,3,4,5"

let str2 = arr.join(" - ");
console.info(str2);
// str2 akan berisi "1 - 2 - 3 - 4 - 5"
