/**
 * Buat 2 object array.
 * Proses input data dari object array pertama harus lebih dulu dari object array ke 2
 * 1. fungsi insert obj1 => a. buat tanpa set timeout dan pakai promise
 *                          b. buat dengan set timeout dan tidak pakai promise
 *
 * 2. fungsi insert obj2 => a. buat set timeout dan pakai promise
 *                          b. buat tanpa set timeout dan tanpa pakai promise
 * 
 */


/**
 * 1. Terminal RUN in directory source code : npm install readline-sync
 * 2. Create launch.json
 * 3. add in Configuration ===> "program": "${file}",
 *                              "console": "integratedTerminal"
 * 4. Run and Debug with VS Code
 */

let Objects = [];
function insertData(data) {
    return new Promise((resolve, reject) => {
        // Push the data object to the array
        try {
            Objects.push(data);

            // If the data object was inserted successfully, resolve the Promise
            resolve(data);
        } catch (error) {
            // If there was an error, reject the Promise
            reject(error);
        }
    });
}


//-------------------------------------------------(2)
const getStart = () => {
    return new Promise((resolve, reject) => {
        let value;

        let readline1 = require('readline-sync');
        const registCode = parseInt(readline1.question(
            `\nWORKSHOP WEB DEVELOPMENT\nRegister code options : 1 ~ 12\n------------------------------\nEnter your register code : `
        ));
        if (registCode > 12 || isNaN(registCode)) {
            throw new Error(`Notification : FAILED! => Sorry, the package code choice you entered is invalid..!`);
        } else {
            value = registCode;
            notif = `Notification : SUCCESS! => Your choice of register code => ${registCode}`;
        }

        setTimeout(() => {
            resolve(value);
            reject(value);
            console.info(notif);
        }, 7000)

    });
}

//-------------------------------------------------(3)
const getRegister = (registCode) => {
    return new Promise((resolve, reject) => {
        let value;
        if (registCode > 12 || (isNaN(registCode))) {
            throw new Error('Notification : ERROR! => Sorry, Invalid Registration Number..!');
        } else {
            let readline2 = require('readline-sync');
            let choosePackage = readline2.question(
                `\nPackage code options :\nA => Rp. 300.000 (VIP)\nB => Rp. 200.000 (Reguler)\nC => Rp. 100.000 (Economy)\n--------------------------\nEnter your package A/B/C : `
            );
            if (choosePackage == "A") {
                value = choosePackage;
                notif = "Notification : SUCCESS! => Your choice of code package => A => Rp. 300.000 (VIP)";
            } else if (choosePackage == "B") {
                value = choosePackage;
                notif = "Notification : SUCCESS! => Your choice of code package => B => Rp. 200.000 (Reguler)";
            } else if (choosePackage == "C") {
                value = choosePackage;
                notif = "Notification : SUCCESS! => Your choice of code package => C => Rp. 100.000 (Economy)";
            } else {
                throw new Error(`Notification : FAILED! => Sorry, the package code choice you entered is invalid..!`);
            }
        }

        setTimeout(() => {
            resolve(value);
            reject(value);
            console.info(notif);
        }, 5000)

    });
}

//-------------------------------------------------(4)
const getPayment = (choosePackage) => {
    return new Promise((resolve, reject) => {
        let value;
        let readline3 = require('readline-sync');
        let chooseMethod = readline3.question(
            `\nPayment method options :\n- BCA\n- BNI\n- BRI \n-------------------------------------\nEnter your payment method BCA/BNI/BRI : `
        );
        if (chooseMethod == "BCA") {
            value = chooseMethod;
            notif = "Notification : SUCCESS! => Your choice of payment method => BCA";
        } else if (chooseMethod == "BNI") {
            value = chooseMethod;
            notif = "Notification : SUCCESS! => Your choice of payment method => BNI";
        } else if (chooseMethod == "BRI") {
            value = chooseMethod;
            notif = "Notification : SUCCESS! => Your choice of payment method => BRI";
        } else {
            throw new Error(`Notification : FAILED! => Sorry, the payment method choice you entered is invalid..!`);
        }

        setTimeout(() => {
            resolve(value);
            reject(value);
            console.info(notif);
        }, 3000)

    });
}


//-------------------------------------------------(1)
const orderTicket = async () => {
    while (true) {
        const registCode = await getStart();
        const packageCode = await getRegister(registCode);
        const paymentCode = await getPayment(packageCode);
        console.info([registCode, packageCode, paymentCode]);
        insertData({ registCode: registCode, packageCode: packageCode, paymentCode: paymentCode })

        let readline = require('readline-sync');
        const answer = readline.question(
            `\nDo you want to continue ordering tickets? (Y/N) `
        );
        if (answer.toLowerCase() === "n") {
            console.info(Objects);
            break;
        }
    }
};

orderTicket().catch(Err => console.error(Err.toString()));

