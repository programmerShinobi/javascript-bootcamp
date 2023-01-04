/**
 * Fungsi Symbol() adalah fungsi built-in di JavaScript yang membuat nilai simbol baru.
 * Simbol adalah tipe data yang unik dan tidak dapat diubah di JavaScript
 * yang dapat digunakan sebagai identifikasi untuk properti objek
 * 
 */

let sym1 = Symbol();
let sym2 = Symbol('My Symbol');

console.log(typeof sym1);  // "symbol"
console.log(sym1.toString());  // "Symbol()"
console.log(sym2.toString());  // "Symbol(My Symbol)"

//---------------------------------------------------

const key1 = Symbol();
const key2 = Symbol('description');
const obj = {};
obj[key1] = 'value 1';
obj[key2] = 'value 2';

console.log(obj[key1]);  // 'value 1'
console.log(obj[key2]);  // 'value 2'
