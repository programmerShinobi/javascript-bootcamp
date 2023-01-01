/**
 * Array.splice() :
 * Metode ini menerima dua argumen yang pertama
 * adalah indeks dimana elemen baru akan ditambahkan
 * atau elemen lama akan dihapus,
 * dan yang kedua adalah jumlah elemen yang akan dihapus (opsional).
 * Selain itu, metode ini juga menerima argumen tambahan
 * yang akan ditambahkan ke array.
 * Metode ini mengembalikan array
 * yang berisi elemen-elemen yang dihapus.
 * 
 * indexArray[0,1,2,3,4,5]
 * Indeks ke 0 & 1 ---> - indeks ke-0 menunjukkan indeks ke- ..
 *                      - indeks ke-1 menunjukkan banyaknya element yang akan dihapus
 *                        dari nilai parameter yang ada di indeks ke-0
 * 
 */

const numbers1 = [1, 2, 3, 4, 5];
const splice1 = numbers1.splice(2, 3);  // (menghapus element dari index ke-2, menghapus sebanyak 3 element)
console.info(splice1);  // output : [ 3, 4, 5 ]
console.info(numbers1);  // output : [ 1, 2 ]

//-----------------------------------------------------------

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const splice2 = numbers2.splice(3, 5, 66, 77, 88);  // (menghapus element dari index ke-3, menghapus sebanyak 5 element, element yang ditambahkan memiliki value : 66, 77, 88)
console.info(splice2); // output : [ 4, 5, 6, 7, 8 ]
console.info(numbers2);  // output: [ 1, 2, 3, 66, 77, 88, 9 ]

//-----------------------------------------------------------

const angka = [1, 2, 3, 4, 5];
const splice3 = angka.splice(0, 0, 919, 818, 717, 616); // (menghapus element dari index ke-0, menghapus sebanyak 0, element yang ditambahkan memiliki value : 919, 818, 717, 616)
console.info(splice3); // output : [..]
console.info(angka); // output ; [919, 818, 717, 616, 1, 2, 3, 4, 5]

