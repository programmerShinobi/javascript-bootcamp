/**
 * Output : 
 * 3
 * 2
 * 1
 * 0
 * -1
 * -2
 * -3
 * -4
 * dst ...
 * 
 */
// function countDown1(fromNumber) {
//     console.info(fromNumber);
//     countDown1(fromNumber - 1);
// }

// countDown1(3);

/**
 * Output :
 * 3
 * 2
 * 1
 *
 * */
function countDown2(fromNumber) {
    console.info(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown2(nextNumber);
    }
}

countDown2(3);

/**
 * Output :
 * a ~ z
 * 
 */
function increment(fromNumber) {
    let number = '';
    number += String.fromCharCode(fromNumber) + ' ';

    let nextNumber = fromNumber + 1;

    if (nextNumber <= 123) {
        console.info(number);
        increment(nextNumber);
    }
}

increment(97);


/**
 * Output :
 * 1 ~ 100 (Bilangan genap)
 * 
 */
let nextNumber = 0
function genap(number) {
    nextNumber++
    if (nextNumber <= number) {
        nextNumber % 2 == 0 ? console.log(nextNumber) : console.log('')
        genap(number)
    }
}

genap(100)



