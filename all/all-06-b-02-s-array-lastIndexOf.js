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
 * array.lastIndexOf(item, indexStart)
 * (
 *      mencari item pada element array dari indeks terakhir sampai indeks pertama,
 *          dimulai dari indexStart
 * )
 * 
 */

/*
arr.lastIndexOf(3, 5) :
------------------------------------------------------------------------------------------------
step-1
          |0|<-----------|5|        menentukan indeks ke 5 berada di element ke 6
arr     = [1, 2, 3, 4, 5, 6, 7, 8];
------------------------------------------------------------------------------------------------
step-2
          |0|<-----------|5|        lalu mencari value 3 dari indeks 5 sampai indeks pertama (0)
                |2|                 value 3 berada di indeks 2
arr     = [1, 2, 3, 4, 5, 6, 7, 8]
------------------------------------------------------------------------------------------------
maka hasil dari arr.lastIndexOf(3, 5) = 2
*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.lastIndexOf(3, 5)); // output: 2
console.info(`\n`); /*---------------------------------*/

let array1 = [1, 2, 3, 4, 3, 5, 3];

console.info(array1.lastIndexOf(3));       // output: 6
console.info(array1.lastIndexOf(3, 3));    // output: 2
console.info(array1.lastIndexOf(3, 5));    // output: 4
console.info(array1.lastIndexOf(3, 4));    // output: 4

console.info(`\n`); /*---------------------------------*/

let array2 = [1, 2, 3, 4, 3, 5, 3];

while (array2.lastIndexOf(3) != -1) {
    console.info(array2.lastIndexOf(3));
    /* output :
                6
                4
                2
     */

    array2[array2.lastIndexOf(3)] = `found indeks ke-${array2.lastIndexOf(3)}`;
    // isi element yang memiliki value 3 = found indeks ke-..
}

console.info(array2);
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

