/**
 * Array.fill()
 * Method ini akan mengubah array yang asli,
 * sehingga semua elemen dalam array tersebut
 * akan diisi dengan nilai yang ditentukan.
 * 
 */

let arr = [1, 2, 3, 4, 5];
arr.fill(9); // (semua value di dalam element array di ubah menjadi = 9)
console.info(arr);
// arr akan berisi [9, 9, 9, 9, 9]

let arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2); // (value di dalam element array diubah menjadi = 0, dimulai dari indeks ke-2)
console.info(arr2);
// arr2 akan berisi [1, 2, 0, 0, 0]

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr3.fill(0, 2, 5); // (value di dalam element array diubah menjadi = 0, dimulai dari indeks ke-2, sampai sebelum indeks ke-5 )
console.info(arr3);
// arr3 akan berisi [1, 2, 0, 0, 0, 6, 7, 8, 9]
