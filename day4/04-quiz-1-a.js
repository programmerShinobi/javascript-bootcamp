/**
 * buat 2 object array,
 * proses input data dari object array pertama harus lebih dulu dari object array ke 2
 * 1. fungsi insert obj1 => a. buat tanpa set timeout dan pakai promise
 *                          b. buat dengan set timeout dan tidak pakai promise
 *
 * 2. fungsi insert obj2 => a. buat set timeout dan pakai promise
 *                          b. buat tanpa set timeout dan tanpa pakai promise
 * 
 */

//-------------------------------------------------(2)
const getRegister = (chooseQueue) => {
    return new Promise((resolve, reject) => {
        let messages;
        if (chooseQueue > 12 || (isNaN(chooseQueue))) {
            throw new Error('Notification : ERROR! => Sorry, Invalid Registration Number..!');
        } else {
            console.info(`Notification : SUCCESS! => Your choice of queue number => ${chooseQueue}`);
            let readline2 = require('readline-sync');
            let choosePackage = readline2.question(
                `\nPackage code options :\nA => Rp. 300.000 (VIP)\nB => Rp. 200.000 (Reguler)\nC => Rp. 100.000 (Economy)\n--------------------------\nEnter your package A/B/C : `
            );
            if (choosePackage == "A") {
                messages = "Notification : SUCCESS! => Your choice of code package => A => Rp. 300.000 (VIP)";
            } else if (choosePackage == "B") {
                messages = "Notification : SUCCESS! => Your choice of code package => B => Rp. 200.000 (Reguler)";
            } else if (choosePackage == "C") {
                messages = "Notification : SUCCESS! => Your choice of code package => C => Rp. 100.000 (Economy)";
            } else {
                throw new Error(`Notification : FAILED! => Sorry, the package code choice you entered is invalid..!`);
            }
        }
        resolve(messages);
        reject(messages);
        console.info(messages);

    });
}

//-------------------------------------------------(3)
const getPayment = (choosePackage) => {
    return new Promise((resolve, reject) => {
        let messages;
        let readline2 = require('readline-sync');
        let chooseMethod = readline2.question(
            `\nPayment method options :\n- BCA\n- BNI\n- BRI \n--------------------------\nEnter your payment method BCA/BNI/BRI : `
        );
        if (chooseMethod == "BCA") {
            messages = "Notification : SUCCESS! => Your choice of payment method => BCA";
        } else if (chooseMethod == "BNI") {
            messages = "Notification : SUCCESS! => Your choice of payment method => BNI";
        } else if (chooseMethod == "BRI") {
            messages = "Notification : SUCCESS! => Your choice of payment method => BRI";
        } else {
            throw new Error(`Notification : FAILED! => Sorry, the payment method choice you entered is invalid..!`);
        }

        resolve(messages);
        reject(messages);
        console.info(messages);

    });
}

//-------------------------------------------------(4)
const orderTicket = async (regist) => {
    const numbRegister = await getRegister(regist);
    const paymentCode = await getPayment(numbRegister);
    return [numbRegister, paymentCode];
}

//-------------------------------------------------(1)
let readline1 = require('readline-sync');
let pilihanAntrian = parseInt(readline1.question(
    `WORKSHOP WEB DEVELOPMENT\nQueue number options : 1 ~ 12\n-----------------------------\nEnter your queue number : `
));

orderTicket(pilihanAntrian).then(res => console.info(res))
    .catch(Err => console.error(Err.toString()));

