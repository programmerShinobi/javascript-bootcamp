/**
 * Array.lastIndexOf()
 * Method yang mengembalikan indeks dari elemen terakhir
 * yang ditemukan dalam array,
 * atau -1 jika elemen tersebut tidak ditemukan.
 * Method ini bisa menerima dua argument,
 * yaitu elemen yang dicari
 * dan indeks dimana pencarian harus dimulai
 * (secara default, pencarian dimulai dari indeks terakhir dari array)
 * 
 */


/**
 * array = [item]
 * array.lastIndexOf(item, start)
 * (
 *      mencari item pada element array dari element terakhir hingga pertama,
 *          dimulai dari indeks start
 * )
 * ===> mencari item di setiap index array
 */

/*
step(1)
Menentukan indeks ke-5
arr     = [1, 2, 3, 4, 5, 6, 7, 8]
indeks ke |0|----------->|5|

step(2)
Mencari value 3 dari kanan ke kiri
dimulai dari indeks ke 4 (sebelum indeks ke 5)
arr     = [1, 2, 3, 4, 5, 6, 7, 8]
mencari value 3    |0|-->|0| 

*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.lastIndexOf(7, 5)); // output: 2

console.info(`\n`); /*---------------------------------*/

let array1 = [1, 2, 3, 4, 3, 5, 3];

console.info(array1.lastIndexOf(3));       // output: 6
console.info(array1.lastIndexOf(3, 3));    // output: 2
console.info(array1.lastIndexOf(3, 5));    // output: 4
console.info(array1.lastIndexOf(3, 4));    // output: 4

console.info(`\n`); /*---------------------------------*/

// let array2 = [1, 2, 3, 4, 3, 5, 3];

// while (array2.lastIndexOf(3) != -1) {
//     console.info(array2.lastIndexOf(3));
//     /* output :
//                 6
//                 4
//                 2
//      */

//     array2[array2.lastIndexOf(3)] = `found indeks ke-${array2.lastIndexOf(3)}`;
//     // isi element yang memiliki value 3 = found indeks ke-..
// }

// console.info(array2);
/**
 * output :
    [
        1,
        2,
        'found indeks ke-2',
        4,
        'found indeks ke-4',
        5,
        'found indeks ke-6'
    ]
 */

