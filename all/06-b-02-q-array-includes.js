/**
 * Array.includes()
 * Method yang berguna untuk mengecek
 * apakah sebuah elemen tertentu ada di dalam array atau tidak. Method ini akan mengembalikan nilai boolean (true atau false) sesuai dengan apakah elemen tersebut ada atau tidak
 */

//angka.includes(value) ---> (value pada element)
let angka = [1, 2, 3, 4, 5];
console.log(angka.includes(3));  // Output: true
console.log(angka.includes(6));  // Output: false

console.info(`\n`)
//---------------------------------------------------------

//kata.includes('value', index)
let kata = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam'];
console.log(kata.includes('tiga', 3));  // Output: false
console.log(kata.includes('tiga', 2));  // Output: true
