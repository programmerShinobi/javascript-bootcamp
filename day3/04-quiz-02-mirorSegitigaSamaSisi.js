function mirorSegitigaSamaSisi_for(data) {
    let concat = " ";
    for (i = data; i >= i; i--) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = concat.repeat(data - i) + angka.repeat(i);
            console.info(concat);
            concat = " ";
        }
    }
}

function mirorSegitigaSamaSisi_while(data) {
    let concat = " ";
    let i = data;
    while (i >= i) {
        let angka = i + " ";
        if (i % 2 == 1) {
            concat = concat.repeat(data - i) + angka.repeat(i);
            console.info(concat);
            concat = " ";
        }
        i--;
    }
}

mirorSegitigaSamaSisi_for(10);
mirorSegitigaSamaSisi_while(10);