function segitigaSamaSisi(data) {
    let concat = " ";
    for (let i = 1; i <= data; i++) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = concat.repeat(data - i) + angka.repeat(i);
            console.info(concat);
            concat = " ";
        }
    }
}

function segitigaSamaSisi2(data) {
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

console.info(segitigaSamaSisi(10));
console.info(segitigaSamaSisi2(10));





