function belahKetupat(data1) {
    let data2 = data1;
    let concat1 = " ";
    let concat2 = " ";
    let i = 1;
    for (i; i <= data1; i++) {
        if (i % 2 == 1) {
            let angka1 = i + " ";
            concat1 = concat1.repeat(data1 - i) + angka1.repeat(i);
            console.info(concat1);
            concat1 = " ";
        }
    }
    for (let j = data2; j >= j; j--) {
        if (j % 2 == 1) {
            let angka2 = j + " ";
            concat2 = concat2.repeat(data2 - j) + angka2.repeat(j);
            if (j == 9) {

            } else {
                console.info(concat2);
            }
            concat2 = " ";
        }
    }
}
belahKetupat(10);