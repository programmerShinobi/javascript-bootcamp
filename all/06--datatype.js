/**
 * Data Type (Tipe Data)
 * ---> Tipe data yang dapat digunakan dalam bahasa pemrograman JavaScript untuk menyimpan dan mengolah informasi.
 *      Dalam JavaScript, ada beberapa tipe data dasar yang tersedia
 * 
 * Rules Convention Variable Names :
 * 1.   Variable name tidak boleh diawali dengan angka
 * 2.   Variable name tidak boleh ada spasi
 * 3.   Varible name tidak boleh ada dash karakter (-)
 * 4.   Varibale name tidak boleh gunakan reserve word, seperti const,let atau var
 * 5.   Gunakan camelCase atau underscore
 * 6.   Gunakan meaningful name (clean code) --> Kode yang mudah dibaca dan dipahami,
 *                                               karena nama yang bermakna akan membantu pembaca kode
 *                                               memahami apa yang dilakukan oleh elemen tersebut dalam kode program
 * 7.   Jangan diawali dengan upperCase
 * 
 * Primitive Data Type ---> Stack memory :
 * 1.   Number: 
 *      --->    Tipe data ini digunakan untuk menyimpan angka, baik itu bilangan bulat atau pecahan. Contohnya: 10, 3.14, -5.
 * 2.   String:
 *      --->    Tipe data ini digunakan untuk menyimpan teks atau karakter.
 *              String harus ditulis dengan tanda petik (single atau double). Contohnya: "Hello World", 'Hello World'.
 * 3.   Boolean:
 *      --->    Tipe data ini hanya memiliki dua nilai, yaitu true atau false. Boolean biasa digunakan dalam operasi logika
 *              seperti percabangan (if) atau perulangan (while).
 * 4.   Null: 
 *      --->    Tipe data ini merupakan nilai khusus yang menunjukkan bahwa suatu variabel tidak memiliki nilai.
 * 5.   Undefined:
 *      --->    Tipe data ini merupakan nilai khusus yang menunjukkan bahwa suatu variabel belum memiliki nilai yang ditentukan.
 * 6.   Symbol:
 *      --->    Tipe data untuk membuat simbol baru, Anda dapat menggunakan fungsi Symbol() yang diberikan oleh JavaScript.
 *              Fungsi ini mengembalikan sebuah simbol baru yang unik.
 *              Sebagai opsional, dengan cara memberikan string sebagai parameter
 *              untuk memberikan deskripsi simbol tersebut
 * 
 * Non - Primitive Data Type ---> Heap memory :
 * 1.   Object:
 *      --->    Tipe data ini digunakan untuk menyimpan informasi yang terdiri dari beberapa pasangan nilai-kunci (key-value pairs).
 *              Objek dapat berisi berbagai tipe data, termasuk tipe data dasar dan objek lainnya.
 * 2.   Array:
 *      --->    Tipe data ini digunakan untuk menyimpan sekumpulan nilai yang terurut dalam indeks berbasis nol.
 *              Array dapat berisi berbagai tipe data, termasuk tipe data dasar dan objek.
 * 3.   Function:
 *      --->    Tipe data ini merupakan sebuah blok kode yang dapat dipanggil dan dieksekusi secara terpisah
 *              dari kode program utama. Fungsi dapat mengambil input dan menghasilkan output.
 * 4.   Date:
 *      --->    Tipe data ini digunakan untuk menyimpan tanggal dan waktu dalam JavaScript.
 *              
 * 5.   Regex (Regular Expression):
 *      --->    Tipe data RegExp digunakan untuk menyimpan ekspresi reguler,
 *              yaitu pola string yang digunakan untuk memvalidasi atau mencocokkan string lain
 * 6.   BigInt:
 *      --->    Tipe data yang digunakan untuk menyimpan bilangan integer yang lebih besar dari jangkauan
 *              yang dapat ditampung oleh tipe data Number standar JavaScript, yaitu -(2^53-1) sampai (2^53-1).
 * 
 * Stack Memory ===> "last-in, first-out" (LIFO) :
 * ---> Jenis memori yang dikelola secara otomatis oleh sistem operasi
 *      untuk menyimpan data (sementara) yang dibutuhkan oleh program saat ini.
 *      Stack memory bekerja dengan prinsip "last-in, first-out" (LIFO),
 *      yang berarti data yang terakhir masuk ke dalam stack
 *      akan menjadi data yang pertama keluar dari stack.
 * 
 * Heap Memory
 * ---> Jenis memori yang dikelola secara manual oleh program
 *      untuk menyimpan data yang dibutuhkan dalam jangka waktu yang lama
 * 
 */

