/**
 * Number type
 * ---> Hanya integer dan floating-pint (bilangan desimal)
 * ---> Jika dibelakang koma adalah 0 maka dianggap integer
 *      untuk menghemat penggunaan memory,
 *      karena floating point menggunakan memory 2 kali lipat dari integer
 * ---> NaN singkatan dari floating point
 * 
 */

let num = 100; // integer

const prices = 0.05; // floating point

const budget = 1_000_000_00;

const prices2 = 200.00; //integer

console.info('a' / 2); //NaN : Not a Number