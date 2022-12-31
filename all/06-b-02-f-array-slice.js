/**
 * Array.slice() :
 * Metode ini menerima dua argumen
 * yang pertama adalah indeks awal,
 * dan yang kedua adalah indeks akhir (opsional).
 * Metode ini tidak mengubah array asli,
 * tapi mengembalikan array baru
 * yang berisi elemen-elemen yang dipilih
 * Metode slice berguna untuk mengambil sebagian dari array
 * tanpa merubah array asli.
 * Metode ini untuk membuat salinan array
 * atau untuk membuat array baru
 * dengan elemen-elemen yang dipilih dari array asli
 * 
 */

const numbers = [1, 2, 3, 4, 5];

const part = numbers.slice(1, 3);  // mengambil 2 elemen mulai dari indeks ke-1
console.info(part);  // output: [2, 3]
console.info(numbers);  // output: [1, 2, 3, 4, 5]

const all = numbers.slice();  // mengambil semua elemen dari array
console.info(all);  // output: [1, 2, 3, 4, 5]
