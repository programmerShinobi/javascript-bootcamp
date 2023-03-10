/**
 * Array.indexOf()
 * Method yang digunakan
 * untuk mencari indeks suatu elemen dalam sebuah array.
 * Method ini akan mengembalikan indeks dari elemen pertama
 * yang ditemukan dalam array,
 * atau -1 jika elemen tersebut tidak ditemukan
 *
 */

/**
 * array = [item]
 * array.indexOf(item, indexStart)
 * (
 *      mencari item pada element array dari indeks pertama sampai indeks terakhir,
 *          dimulai dari indexStart
 * )
 * 
 */


/*
arr.lastIndexOf(7, 3) :
-------------------------------------------------------------------------------------------------
step-1
          |0|----->|3|              menentukan indeks ke 3 berada di element ke 4
arr     = [1, 2, 3, 4, 5, 6, 7, 8]
-------------------------------------------------------------------------------------------------
step-2
                   |3|-------->|7|  lalu mencari value 7 dari indeks 3 sampai indeks terakhir (7)
                            |6|     value 7 berada di index 6
arr     = [1, 2, 3, 4, 5, 6, 7, 8]
-------------------------------------------------------------------------------------------------
maka hasil dari arr.lastIndexOf(7, 3) = 6
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.indexOf(7, 3)); // output: 2
console.info(`\n`); /*---------------------------------*/


let array1 = [1, 2, 3, 4, 3, 5, 3];

console.info(array1.indexOf(3));       // output: 2
console.info(array1.indexOf(3, 3));    // output: 4
console.info(array1.indexOf(3, 5));    // output: 6
console.info(array1.indexOf(3, 4));    // output: -1

console.info(`\n`); /*---------------------------------*/

let array2 = [1, 2, 3, 4, 3, 5, 3];

while (array2.indexOf(3) != -1) {
    console.info(array2.indexOf(3));
    /* output :
                2
                4
                6
     */

    array2[array2.indexOf(3)] = `found indeks ke-${array2.indexOf(3)}`;
    // isi element yang memiliki value 3 = found
}

console.info(array2);
/**
 * output
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