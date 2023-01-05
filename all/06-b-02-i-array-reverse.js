/**
 * Array.reverse()
 * Method ini akan mengubah array yang asli,
 * sehingga elemen-elemen dalam array tersebut
 * akan terurut dalam urutan yang terbalik
 * setelah method ini dijalankan.
 * 
 */

let arr = [1, 2, 3, 4, 5];
let reversedArr = [...arr].reverse();
console.info(reversedArr);
// reversedArr akan berisi [5, 4, 3, 2, 1]

console.log(arr); // [1, 2, 3, 4, 5]
