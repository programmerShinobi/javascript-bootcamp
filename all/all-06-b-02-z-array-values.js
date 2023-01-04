/**
 * Array.values()
 * Method yang akan mengembalikan sebuah objek iterator
 * yang berisi setiap nilai elemen dari array tersebut.
 * Objek iterator tersebut dapat digunakan
 * untuk mengiterasi setiap elemen dalam array
 * dengan menggunakan loop,
 * atau dengan menggunakan destructuring assignment
 * 
 */

const numbers = [1, 2, 3, 4];

// Menggunakan loop for-of untuk mengiterasi setiap elemen dari array:
for (const value of numbers.values()) {
    console.log(value);
    /** output :
            1
            2
            3
            4
     */
}

// Menggunakan destructuring assignment untuk mengambil setiap elemen dari array:
const [first, second, third, fourth] = numbers.values();

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
console.log(fourth); // Output: 4
