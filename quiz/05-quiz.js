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

insertData({ name: 'FaQih', age: 27, email: 'faqih@gmail.com' })
    .then(() => {
        console.info('Data inserted successfully');
    })
    .catch(error => {
        console.error(error);
    });

insertData({ name: 'Rendra', age: 24, email: 'rendra@gmail.com' })
    .then(() => {
        console.info('Data inserted successfully');
    })
    .catch(error => {
        console.error(error);
    });

insertData({ name: 'Zul', age: 24, email: 'Zul@gmail.com' })
    .then(() => {
        console.info('Data inserted successfully');
    })
    .catch(error => {
        console.error(error);
    });

insertData({ name: 'Ilmi', age: 23, email: 'ilmi@gmail.com' })
    .then(() => {
        console.info('Data inserted successfully');
    })
    .then(() => {
        console.info(objects);
    })
    .catch(error => {
        console.error(error);
    });


