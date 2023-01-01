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


let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
console.info(fruits);

let slicedFruits = fruits.slice(1, 3); // (index ke 1, index ke 3) ---> ambil nilai dari index ke 1 sampai index sebelum index ke 3, yaitu 2
// slicedFruits akan berisi ['banana', 'mango']
console.info(slicedFruits);
console.info(fruits);


let slicedFruits2 = fruits.slice(2); // (index ke 2) ---> ambil nilai dari index ke-2 sampai nilai index akhir

console.log(slicedFruits2); // ['mango', 'orange', 'pineapple']
