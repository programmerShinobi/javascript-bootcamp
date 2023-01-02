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
 * array.indexOf(item, start)
 * (
 *      menghitung jumlah item pada element array,
 *          dimulai dari indeks start
 * )
 * ===> menghitung jumlah item di setiap index array
 */

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

    array2[array2.indexOf(3)] = "found";
    // isi indeks ke 3 = found
}

console.info(array2);
// output : [ 1, 2, 'found', 4, 'found', 5, 'found' ]

