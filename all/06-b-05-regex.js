/**
 * RegEx atau Regular Expression
 * ===> Sekumpulan karakter yang digunakan untuk membuat pola pencarian di dalam teks.
 * `    Di JavaScript, Anda dapat menggunakan RegEx untuk memvalidasi input,
 *      mencari dan mengganti teks, dan lain-lain.
 * 
 */


// Matches
// ^
let regex1 = /^This/;
let string1 = "This is ..";
console.info(string1.match(regex1)); // [ 'This', index: 0, input: 'This is ..', groups: undefined ]

// $
let regex2 = /end$/;
let string2 = "This is the end";
console.info(string2.match(regex2)); // [ 'end', index: 12, input: 'This is the end', groups: undefined ]

// *
let regex3 = /se*/;
let string3 = "seee as well as se";
console.info(string3.match(regex3)); // [ 'seee', index: 0, input: 'seee as well as se', groups: undefined ]

//  ?
let regex4 = /ap?/;
let string4 = "apple and and";
console.info(string4.match(regex4)); // [ 'ap', index: 0, input: 'apple and and', groups: undefined ]

// +
let regex5 = /ap+/;
let string5 = "apple but not and";
console.info(string5.match(regex5)); // [ 'app', index: 0, input: 'apple but not and', groups: undefined ]

// {n}
let regex6 = /ap{2}/;
let string6 = "apple but not apie";
console.info(string6.match(regex6)); // [ 'app', index: 0, input: 'apple but not apie', groups: undefined ]

// {\n,\}
let regex7 = /ap{2,}/;
let string7 = "all p's in apple and appple but not apie";
console.info(string7.match(regex7));
/*
    [
    'app',
    index: 11,
    input: "all p's in apple and appple but not apie",
    groups: undefined
    ]
*/


//  {n,m\}
let regex8 = /ap{2,4}/;
let string8 = "four p's in appppple";
console.info(string8.match(regex8));
/*
[
    'apppp',
    index: 12,
    input: "four p's in appppple",
    groups: undefined
]
*/

// [...]
let regex9 = /a[px]e/;
let string9 = "ape and axe but not ale";
console.info(string9.match(regex9));
/*
[
    'ape',
    index: 0,
    input: 'ape and axe but not ale',
    gr
]
*/

// [^...]
let regex10 = /a[^px]/;
let string10 = "ale but not axe or ape";
console.info(string10.match(regex10)); // [ 'al', index: 0, input: 'ale but not axe or ape', groups: undefined ]

// \b
let regex11 = /\bno/;
let string11 = "the first no in nono";
console.info(string11.match(regex11)); // [ 'no', index: 10, input: 'the first no in nono', groups: undefined ]

// \B
let regex12 = /\Bno/;
let string12 = "the second no in nono";
console.info(string12.match(regex12)); // [ 'no', index: 19, input: 'the second no in nono', groups: undefined ]
// \d
let regex13 = /\d{3}/;
let string13 = "123 in Now 123";
console.info(string13.match(regex13)); // ['123', index: 0, input: '123 in Now 123', groups: undefined]

// \w
let regex14 = /\w/;
let string14 = "js in javascript";
console.info(string14.match(regex14)); // [ 'j', index: 0, input: 'js in javascript', groups: undefined ]

// \W
let regex15 = /\W/;
let string15 = "% in 100%";
console.info(string15.match(regex15)); // [ '%', index: 0, input: '% in 100%', groups: undefined ]


