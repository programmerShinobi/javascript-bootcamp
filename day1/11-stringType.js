let rawString = ' Hi ';
let strippedString = rawString.trim();
console.info(strippedString); //Hi

let greeting = 'Hello';
console.info(greeting.toLowerCase()); //'hello'
console.info(greeting.toUpperCase()); //"HELLO"

let str = "This is a test of search()";
let pos = str.search(/is/);
console.info(pos); //2

let expression = '1 + 2 = 3';
let matches = expression.match(/\d+/);
console.info(matches[0]); // 1

let expression2 = '1 + 2 = 3';
let matches2 = expression2.match(/\d+/g);

for (const match2 of matches2) {
    console.info(match2);
}

let str3 = "The baby kick the bali";
// replace "the" with "a"
let newStr = str3.replace(/the/g, 'a');

console.info(newStr);
