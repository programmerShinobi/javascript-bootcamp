/**
 * Untuk menghilangkan kata "users" pada tiap objek array,
 * Anda dapat menggunakan sintaks Object.assign untuk menyalin properti dari objek yang dibuat
 * dengan constructor function users ke dalam objek baru tanpa menyertakan properti constructor.
 * Dengan menggunakan Object.assign, 
 * Anda dapat menyalin semua properti dari objek yang dibuat dengan constructor function users
 * ke dalam objek baru tanpa menyertakan properti constructor.
 * Sehingga, setiap objek yang terdapat dalam array objects tidak akan memiliki properti constructor
 * dan kata "users" tidak akan muncul pada tiap objek.
 * 
 * @param {*} name 
 * @param {*} email 
 * @param {*} address 
 * @param {*} active 
 * @param {*} age 
 * 
 */

function users(name, email, address, active, age) {
    this.name = name,
        this.email = email,
        this.address = address,
        this.active = active,
        this.age = age
}

let objects = [];

let user1 = Object.assign({}, new users());
user1.name = 'faqih';
user1.email = 'faqih@gmail.com';
user1.address = 'bogor';
user1.active = true;
user1.age = 23;
insertPerson(user1);

let user2 = Object.assign({}, new users());
user2.name = 'Rendra';
user2.email = 'rendra@gmail.com';
user2.address = 'Tanggerang';
user2.active = true;
user2.age = 24;
insertPerson(user2);

let user3 = Object.assign({}, new users());
user3.name = 'Zul';
user3.email = 'zul@gmail.com';
user3.address = 'Yogya';
user3.active = true;
user3.age = 24;
insertPerson(user3);

let user4 = Object.assign({}, new users());
user4.name = 'Ilmi';
user4.email = 'ilmi@gmail.com';
user4.address = 'Bogor';
user4.active = false;
user4.age = 23;
insertPerson(user4);

function insertPerson(user) {
    objects.push(user);
}
insertPerson();
console.info(objects);
