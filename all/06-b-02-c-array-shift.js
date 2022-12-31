/**
 * Array.shift() :
 * Metode ini tidak menerima argumen
 * dan mengembalikan elemen yang dihapus
 * 
 */

const numbers = [1, 2, 3, 4, 5];

const first = numbers.shift();  // menghapus elemen pertama dari array
console.info(first);  // output: 1
console.info(numbers);  // output: [2, 3, 4, 5]
