// while...do & do..while
/**
 * pre-test loop, jika n memenuhi kondisi,
 * js akan execute body while
 * 
 */
let n = 0;
while (n <= 5) {
    console.info(n);
    n++
}

/**
 * do while atau post testm js akan cetak x=6, sebelu masuk
 * 
 */
let x = 6;
do {
    console.info(x);
    x++;
} while (x <= 5);