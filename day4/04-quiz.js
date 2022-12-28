/**
 * buat 2 object array,
 * proses input data dari object array pertama harus lebih dulu dari object array ke 2
 * 1. fungsi insert obj1 => a. buat tanpa set timeout dan pakai promise
 *                          b. buat dengan set timeout dan tidak pakai promise
 *
 * 2. fungsi insert obj2 => a. buat set timeout dan pakai promise
 *                          b. buat tanpa set timeout dan tanpa pakai promise
 * 
 * 
 */

const getRegister = (pilihanAntrian) => {
    return new Promise((resolve, reject) => {
        let messages;
        if (pilihanAntrian >= 12 || (isNaN(pilihanAntrian))) {
            throw new Error('Notification : ERROR! => Sorry, Invalid Registration Number..!');
        } else {
            console.info(`Notification : SUCCESS! => Your choice of queue number => ${pilihanAntrian}`)
            let readline2 = require('readline-sync');
            let pilihanPaket = readline2.question(
                `\nPackage options :\nA => Rp. 300.000 (VIP)\nB => Rp. 200.000 (Reguler)\nC => Rp. 100.000 (Economy)\n--------------------------\nEnter your package A/B/C : `
            );
            if (pilihanPaket == "A") {
                messages = "Notification : SUCCESS! => Your choice of package => A => Rp. 300.000 (VIP)"
                console.info(messages);
            } else if (pilihanPaket == "B") {
                messages = "Notification : SUCCESS! => Your choice of package => B => Rp. 200.000 (Reguler)"
                console.info(messages)
            } else if (pilihanPaket == "C") {
                messages = "Notification : SUCCESS! => Your choice of package => C => Rp. 100.000 (Economy)"
                console.info(messages)
            } else {
                messages = `Notification : FAILED! => Sorry, the package choice you entered is invalid..!`
                console.warn(messages)
            }
        }

        resolve(messages);
        reject(messages);

    });
}

const orderTicket = async (regist) => {
    const numbRegister = await getRegister(regist);
    // const price = await getPayment(pay);
    return [numbRegister];
}


//-------------------------------------------------
let readline1 = require('readline-sync');
let pilihanAntrian = parseInt(readline1.question(
    `WORKSHOP WEB DEVELOPMENT\nPackage options : 1 ~ 12\n------------------------\nEnter your queue number : `
));

orderTicket(pilihanAntrian).then(res => console.info(res))
    .catch(Err => console.error(Err.toString()));
