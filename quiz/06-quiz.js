const readlineSync = require('readline-sync');

let objects = [];

function insertData(data) {
    return new Promise((resolve, reject) => {
        // Push the data object to the array
        objects.push(data);

        // If the data object was inserted successfully, resolve the Promise
        resolve();
    });
}

// Get user input for data
let name = readlineSync.question('Enter name: ');
let age = readlineSync.question('Enter age: ');
let email = readlineSync.question('Enter email: ');

// Insert user data into array
insertData({ name: name, age: age, email: email })
    .then(() => {
        console.info('Data inserted successfully');
    })
    .catch(error => {
        console.error(error);
    });
