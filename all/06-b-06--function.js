/**
 * Function()
 * ---> Block kode yang dapat dijalankan berkali-kali.
 *      Function dapat menerima input berupa parameter
 *      dan dapat mengembalikan nilai output
 *      melalui return statement.
 */

function greet1(name) {
    console.info("Hello, " + name + "!");
}
greet1("shinobi"); // Hello, shinobi!
//---------------------------------------------------

function greet2(name = "world") {
    console.log("Hello, " + name + "!");
}

greet2(); // Hello, world!

//---------------------------------------------------

function add(a, b) {
    return a + b;
}

const sum = add(1, 2); // sum akan bernilai 3
console.info(sum); // 3 ---> didapat dari add(1+2)
