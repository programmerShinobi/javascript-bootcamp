/**
 * Identifier
 * ---> Nama yang diberikan pada sebuah variable, fungsi, class, dll..
 *      Sebuah identifier diawali huruf (a-z atau A-Z), underscore(_),
 *      atau $, kemudian diikuti a-z, A-Z underscore(_), angka, $.
 *      Contoh : namaAwal, Nama_Awal, _nama1
 * 
 */
let myVariable;
function myFunction() { }
let $specialVariable;
let _privateVariable;

/**
 * Sementara itu, identifier berikut ini tidak valid
 * dalam JavaScript karena tidak sesuai
 * dengan aturan penulisan identifier:
 */
var 123invalid; // tidak boleh diawali dengan angka
var invalid-name; // tidak boleh mengandung tanda hubung (-)
