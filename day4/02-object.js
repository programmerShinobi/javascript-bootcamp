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
objects.push(user1);

let user2 = Object.assign({}, new users());
user2.name = 'Rendra';
user2.email = 'rendra@gmail.com';
user2.address = 'Tanggerang';
user2.active = true;
user2.age = 24;
objects.push(user2);

let user3 = Object.assign({}, new users());
user3.name = 'Zul';
user3.email = 'zul@gmail.com';
user3.address = 'Yogya';
user3.active = true;
user3.age = 24;
objects.push(user3);

let user4 = Object.assign({}, new users());
user4.name = 'Ilmi';
user4.email = 'ilmi@gmail.com';
user4.address = 'Bogor';
user4.active = false;
user4.age = 23;
objects.push(user4);

console.info(objects);



// function tambahData(data, array) {
//     array.push(data);
// }

// let data = [];
// let user1 = new data();
// user1.name = 'faqih';
// user1.email = 'faqih@gmail.com';
// user1.address = 'bogor';
// user1.active = true;
// user1.age = 23;
// tambahData(user1, data);
// console.log(data);  // output: [1, 2, 3, 4]
