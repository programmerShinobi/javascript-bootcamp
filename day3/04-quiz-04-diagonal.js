function diagonal_XY(data) {
    let concat = " ";
    for (let i = 1; i <= data; i++) {
        if (i % 2 == 1) {
            let angka = i + " ";
            concat = angka.repeat(i);
            console.info(concat);
            concat = " ";
        }
    }
}

diagonal_XY(10);
