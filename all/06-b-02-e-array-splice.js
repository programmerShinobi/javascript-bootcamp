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

const numbers = [1, 2, 3, 4, 5];
console.info(numbers);

const removed = numbers.splice(2, 3);  // menghapus 2 elemen mulai dari indeks ke-2 ---> (index ke 2, 3 index dari index ke 2 )
console.info(removed);  // output: [3, 4]
console.info(numbers);  // output: [1, 2, 5]

numbers.splice(1, 0, 6, 7, 8);  // menambahkan 3 elemen mulai dari indeks ke-1
console.info(numbers);  // output: [1, 6, 7, 8, 2, 5]

const angka = [11, 22, 33, 44, 55];
console.info(angka); // [11, 22, 33, 44, 55]

const hapus = angka.splice(0, 0, 99, 88, 77, 66);
console.info(hapus); // [] ---> array kosong, karena yang ada pada parameter [0,0], yaitu index ke-0 = 0, dan jumlah element yang akan dihapus adalah 0 dari indeks ke-0
console.info(angka); // [99, 88, 77, 66, 11, 22, 33, 44, 55]

