// function countDown(fromNumber) {
//     console.info(fromNumber);
//     countDown(fromNumber - 1);
// }

// countDown(3);

// function countDown(fromNumber) {
//     console.info(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }

// countDown(3);
let number = '';
function increment(fromNumber) {
    number += String.fromCharCode(fromNumber) + ' ';

    let nextNumber = fromNumber + 1;

    if (nextNumber <= 123) {
        console.info(number);
        increment(nextNumber);
    }
}

increment(97);


// let nextNumber = 0
// function genap(number) {
//     nextNumber++
//     if (nextNumber <= number) {
//         nextNumber % 2 == 0 ? console.log(nextNumber) : console.log('')
//         genap(number)
//     }
// }

// genap(100)



