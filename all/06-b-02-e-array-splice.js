/**
 * Array.splice() :
 * Metode ini menerima dua argumen yang pertama
 * adalah indeks dimana elemen baru akan ditambahkan
 * atau elemen lama akan dihapus,
 * dan yang kedua adalah jumlah elemen yang akan dihapus (opsional).
 * Selain itu, metode ini juga menerima argumen tambahan
 * yang akan ditambahkan ke array.
 * Metode ini mengembalikan array
 * yang berisi elemen-elemen yang dihapus
 * 
 */

const numbers = [1, 2, 3, 4, 5];

const removed = numbers.splice(2, 2);  // menghapus 2 elemen mulai dari indeks ke-2
console.info(removed);  // output: [3, 4]
console.info(numbers);  // output: [1, 2, 5]

numbers.splice(1, 0, 6, 7, 8);  // menambahkan 3 elemen mulai dari indeks ke-1
console.info(numbers);  // output: [1, 6, 7, 8, 2, 5]
