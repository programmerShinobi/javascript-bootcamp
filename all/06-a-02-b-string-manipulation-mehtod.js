// Method
const s = "aku suka js js";

console.info(s.charAt(1)); // return : k

console.info(s.includes("js")); // return : true

console.info(s.startsWith("aku")); // return : true

console.info(s.endsWith("js")); // return : true

console.info(s.indexOf("aku")); // return : 9 (index ke- 9)

console.info(s.lastIndexOf("js")); // return : 12 (index terakhir ke- 12)

console.info(s.repeat(2)); // return : aku suka js jsaku suka js js

// console.info(s.substr(0, 5)); // return : suka js (index ke 4 dari aku("a") & index ke 7 dari suka("s"))

console.info(s.toLowerCase()); // return : aku suka js js

console.info(s.toUpperCase()); // return : AKU SUKA JS JS
