/**
 * Array.reduceRight()
 * Method yang akan mengembalikan sebuah nilai
 * yang merupakan hasil penjumlahan, perkalian,
 * atau operasi lainnya yang ditentukan oleh function
 * yang disediakan sebagai argumen pada setiap elemen array yang ada.
 * 
 */

/**
 * array.reduce((total, number) => total * number, 1) === loopingSemuaElementArray(total = total * number)
 * 1 merupakan nilai awal yang akan di jumlahkan..
 * 
 */

const numbers = [1, 2, 3, 4];

// Menggunakan Array.reduce() untuk menjumlahkan dari element pertama sampai element terakhir :
const sum = numbers.reduce((total, number) => total * number, 1);

console.log(sum); // Output: 24

