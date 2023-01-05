let str1 = "Good Morning!";
console.info(str1.length) // 13

//------------------------------------------------------

let str2 = "Hello";
console.info(str2[str2.length - 1]); //o

//------------------------------------------------------

let str3 = "Hello, world!";

// Ekstrak substring yang dimulai dari indeks 6 dengan panjang 5 menggunakan substr()
// substr(startIndex, [length]);
let substr = str3.substr(2, 9);  // (index ke 2, panjang dari index ke 2 ---> 9)
console.info(substr); // llo, worl

//------------------------------------------------------

let str4 = "Hello, world!";

// Ekstrak substring yang dimulai dari indeks 6 dan berakhir di indeks 11 menggunakan substring()
// substring(startIndex, endIndex);
let substring = str4.substring(7, 12);  // (index ke 6, index ke 11)
console.info(substring); // world

//------------------------------------------------------

let rawString = ' Hi ';
let strippedString = rawString.trim(); // tidak mengandung whitespace

console.log(strippedString);  // "Hi"
console.log(rawString);  // " Hi "

//------------------------------------------------------

let greeting = 'Hello';

console.info(greeting.toLowerCase()); //'hello'
console.info(greeting.toUpperCase()); //"HELLO"

//------------------------------------------------------

let str5 = "This is a test of search()";
let pos = str5.search(/a test/); // a test , kata 'a' berada di index ke 8

console.info(pos); //8

//------------------------------------------------------

let str = "123 456 789";

// Tanpa bendera g, hanya kejadian pertama pola yang dicocokkan
let matches1 = str.match(/\d+/);  // ["123"]

// Dengan bendera g, semua kejadian pola dicocokkan
let matches2 = str.match(/\d+/g);  // ["123", "456", "789"]

//-----------------------------------------------------

let str6 = "The baby kick the bali";

// replace "the" with "a"
let newStr = str6.replace(/the/g, 'a');
console.info(newStr); // The baby kick a bali

//-----------------------------------------------------
