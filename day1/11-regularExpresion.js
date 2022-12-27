// Matches
// ^
let regex1 = /^This/;
let string1 = "This is ..";
console.info(string1.match(regex1));

// $
let regex2 = /end$/;
let string2 = "This is the end";
console.info(string2.match(regex2));

// *
let regex3 = /se*/;
let string3 = "seee as well as se";
console.info(string3.match(regex3));

//  ?
let regex4 = /ap?/;
let string4 = "apple and and";
console.info(string4.match(regex4));

// +
let regex5 = /ap+/;
let string5 = "apple but not and";
console.info(string5.match(regex5));

// {n}
let regex6 = /ap{2}/;
let string6 = "apple but not apie";
console.info(string6.match(regex6));

// {\n,\}
let regex7 = /ap{2,}/;
let string7 = "all p's in apple and appple but not apie";
console.info(string7.match(regex7));

//  {n,m\}
let regex8 = /ap{2,4}/;
let string8 = "four p's in appppple";
console.info(string8.match(regex8));

