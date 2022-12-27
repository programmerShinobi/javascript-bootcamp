// Segitiga sama sisi : For in Fucntion
function mirorSegitigaSamaSisi_for(data) {
    console.info(`\n`);
    console.info("Miror Segitiga : FOR IN FUNCTION");
    let concat = " ";
    for (let i = data; i >= i; i--) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = concat.repeat(data - i) + angka.repeat(i);
            console.info(concat);
            concat = " ";
        }
    }
}


// Segitiga sama sisi : While in Function
function MirorSegitigaSamaSisi_while(data) {
    console.info(`\n`);
    console.info("Miror Segitiga : WHILE IN FUNCTION");
    let concat = " ";
    let i = 1;
    while (i <= data) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = concat.repeat(data - i) + angka.repeat(i);
            console.info(concat);
            concat = " ";
        }
        i++;
    }
}

mirorSegitigaSamaSisi_for(10);
// mirorSegitigaSamaSisi_while(10);