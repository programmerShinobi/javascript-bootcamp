/**
 * Array.find()
 * Method ini untuk mencari elemen pertama dalam array
 * yang lulus tes yang ditentukan oleh sebuah fungsi.
 * Fungsi tersebut akan dipanggil
 * untuk setiap elemen dalam array,
 * dan jika hasil dari pemanggilan fungsi tersebut
 * bernilai true, maka elemen tersebut
 * akan dikembalikan oleh Array.find().
 * Jika tidak ada elemen yang lulus tes,
 * maka Array.find() akan mengembalikan undefined.
 * 
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstLargeNumber = numbers.find(number => number > 5);
console.info(firstLargeNumber)
// firstLargeNumber adalah 6


