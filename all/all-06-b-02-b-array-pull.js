/**
 * Array.pull() :
 * ---> Metode ini tidak menerima argumen
 *      dan mengembalikan elemen yang dihapus
 * 
 */

const numbers = [1, 2, 3, 4, 5];

const last = numbers.pop();  // menghapus elemen terakhir dari array
console.info(last);  // output: 5
console.info(numbers);  // output: [1, 2, 3, 4]
