// Segitiga sama sisi : FOR
console.info("Segitiga : FOR");
let data = 10;
let concat = " ";
for (let i = 1; i <= data; i++) {
    if (i % 2 == 1) {
        let angka = i + " ";
        concat = concat.repeat(data - i) + angka.repeat(i);
        console.info(concat);
        concat = " ";
    }
}

// Segitiga sama sisi : For in Fucntion
function segitigaSamaSisi_for(data) {
    console.info(`\n`);
    console.info("Segitiga : FOR IN FUNCTION");
    let concat = " ";
    let result = "";
    for (let i = 1; i <= data; i++) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = concat.repeat(data - i) + angka.repeat(i);
            result += concat + "\n";
            concat = " ";
        }
    }
    return result;
}

// Segitiga sama sisi : While in Function
function segitigaSamaSisi_while(data) {
    console.info(`\n`);
    console.info("Segitiga : WHILE IN FUNCTION");
    let concat = " ";
    let result = "";
    let i = 1;
    while (i <= data) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = concat.repeat(data - i) + angka.repeat(i);
            result += concat + "\n";
            concat = " ";
        }
        i++;
    }
    return result;
}


console.info(segitigaSamaSisi_for(10));
console.info(segitigaSamaSisi_while(10));
