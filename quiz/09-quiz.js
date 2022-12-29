const insertObj1 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Insert data object ke array
            objects1.push(data);

            // Jika data object berhasil dimasukkan, selesaikan Promise
            resolve();
        }, 2000);
    });
}

insertObj1({ name: 'FaQih', age: 27, email: 'faqih@gmail.com' })
    .then(() => {
        console.info('Data obj1 berhasil dimasukkan');
    })
    .catch(error => {
        console.error(error);
    });

const insertObj2 = (data) => {
    setTimeout(() => {
        // Insert data object ke array
        objects2.push(data);

        console.info('Data obj2 berhasil dimasukkan');
    }, 2000);
}

insertObj2({ name: 'Rendra', age: 24, email: 'rendra@gmail.com' });
