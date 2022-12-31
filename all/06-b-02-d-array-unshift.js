/**
 * Array.unshift() :
 * Metode ini menerima satu atau lebih argumen
 * yang akan ditambahkan ke awal array,
 * dan mengembalikan panjang array
 * setelah elemen-elemen baru ditambahkan
 * 
 */

const numbers = [1, 2, 3];

numbers.unshift(0);  // menambahkan 0 ke awal array
console.info(numbers);  // output: [0, 1, 2, 3]

numbers.unshift(-1, -2, -3);  // menambahkan -1, -2, dan -3 ke awal array
console.info(numbers);  // output: [-1, -2, -3, 0, 1, 2, 3]

