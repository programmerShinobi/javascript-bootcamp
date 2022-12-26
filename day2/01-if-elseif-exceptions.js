/**
 * 1. Terminal RUN in directory source code : npm install readline-sync
 * 2. Run and Debug with VS Code
 * 3. Create launch.json
 * 4. add in Configuration ===> "console": "integratedTerminal"
 */

const readline = require('readline-sync');
const number = parseInt(readline.question('Masukkan data anda : '));

if (number == 5) {
    console.info("Angka diinput sama dengan 5");
} else if (number >= 5) {
    5
    console.info("Angka yang diinput lebih besar sama dengan 5");
} else if (number <= 5) {
    console.info("Angka diinput kurang sama dengan 5");
} else {
    console.info("Angka diinput tidak sesuai kondisi");
}

