/**
 * Array.copyWithin()
 * Method yang berguna untuk menyalin elemen-elemen
 * dari suatu array ke dalam array yang sama
 * dengan menggunakan indeks-indeks tertentu.
 * Method ini akan mengembalikan array yang telah diubah
 * setelah operasi penyalinan selesai dilakukan.
 * 
 * 3 Parameter array.copyWithin()
 * 1.   Target          : indeks di dalam array
 *                        tujuan di mana elemen pertama akan disalin
 * 2.   Start (opsional): indeks di dalam array
 *                        sumber di mana elemen pertama akan disalin.
 *                        Defaultnya adalah 0.
 * 3.   End (opsional)  : indeks di dalam array
 *                        sumber di mana elemen terakhir akan disalin.
 *                        Defaultnya adalah panjang dari array sumber
 * 
 */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * array1 = [1, 2, 3, 4, 5, 6, 7, 8]
 * array1.copyWithin(0, 3, 7)
 * Salin elemen dari indeks 3 ~ 6 (sebelum indeks 7) ke indeks 0
 * (
 *      tujuan copy indeks ke-0,
 *          sumber copy dari indeks ke 3 pada element pertama,
 *              sumber copy dari indeks ke 7 pada element terakhir
 * )
 * 
 */
console.info(array1.copyWithin(0, 3, 7));
// [4, 5, 6, 7, 5, 6, 7, 8]

//-------------------------------------------------------------------

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
/**
 * array2 = [1, 2, 3, 4, 5, 6, 7, 8]
 * array2.copyWithin(0, 3, 4)
 * Salin elemen dari indeks 3 (sebelum indeks ke 4) ---> ke indeks 0
 * (
 *      tujuan copy indeks ke-0,
 *          sumber copy dari indeks ke 3 pada element pertama,
 *              sumber copy dari indeks ke 4 pada element terakhir
 * )
 * 
 */
console.info(array2.copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5, 6, 7, 8]

//-------------------------------------------------------------------

const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
/**
 * array3 = [1, 2, 3, 4, 5, 6, 7, 8]
 * array3.copyWithin(1, 3, 4)
 * Salin elemen dari indeks 3 (sebelum indeks ke 4) ---> ke indeks 1,
 * dan hanya salin satu elemen
 */
console.info(array3.copyWithin(1, 3, 4));
// [1, 4, 3, 4, 5, 6, 7, 8]

//-------------------------------------------------------------------

const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
/**
 * array4 = [1, 2, 3, 4, 5, 6, 7, 8]
 * array4.copyWithin(0, 3)
 * Salin elemen dari indeks 3 ~ indeks akhir ---> ke indeks 0
 * 
 */
console.info(array4.copyWithin(0, 3));
// [4, 5, 6, 7, 8, 6, 7, 8]

