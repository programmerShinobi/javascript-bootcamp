/**
 * Array.push() :
 * ---> Metode ini menerima satu atau lebih argumen
 *      yang akan ditambahkan ke akhir array,
 *      dan mengembalikan panjang array
 *      setelah elemen-elemen baru ditambahkan
 * 
 */
const numbers = [1, 2, 3];

numbers.push(4);  // menambahkan 4 ke akhir array
console.info(numbers);  // output: [1, 2, 3, 4]

numbers.push(5, 6, 7);  // menambahkan 5, 6, dan 7 ke akhir array
console.info(numbers);  // output: [1, 2, 3, 4, 5, 6, 7]
