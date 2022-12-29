const readlineSync = require('readline-sync');

let objects = [];

function insertData(data) {
    return new Promise((resolve, reject) => {
        // Push the data object to the array
        try {
            objects.push(data);

            // If the data object was inserted successfully, resolve the Promise
            resolve();
        } catch (error) {
            // If there was an error, reject the Promise
            reject(error);
        }
    });
}

// Run the insert data loop
let keepInserting = true;
while (keepInserting) {
    // Get user input for data
    let name = readlineSync.question('Enter name: ');
    let age = readlineSync.question('Enter age: ');
    let email = readlineSync.question('Enter email: ');

    // Insert user data into array
    insertData({ name: name, age: age, email: email })
        .then(() => {
            console.info('Data inserted successfully');
        })
        .catch(err => {
            console.error({ name: err.name, message: e.message });
        });

    // Ask user if they want to keep inserting data
    let answer = readlineSync.question('Do you want to insert more data? (Y/N) ');
    if (answer.toLowerCase() === 'n') {
        keepInserting = false;
    }
    // // Set a timeout before continuing the loop
    // setTimeout(() => {

    // }, 1000);
}

