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

const user1 = Objects.assign({}, new users('faqih', 'faqih@gmail.com', 'Bogor', 23, true));
const user2 = Objects.assign({}, new users('rendra', 'rendra@gmail.com', 'Tanggerang', 24, true));
const user3 = Objects.assign({}, new users('zule', 'zule@gmail.com', 'Yogya', 25, true));
const user4 = Objects.assign({}, new users('ilmi', 'ilmi@gmail.com', 'Bogor', 26, true));

Objects.assign({}, new users('faqih', 'faqih@gmail.com', 'Bogor', 23, true));
Objects.assign({}, new users('rendra', 'rendra@gmail.com', 'Tanggerang', 24, true));
Objects.assign({}, new users('zule', 'zule@gmail.com', 'Yogya', 25, true));
Objects.assign({}, new users('ilmi', 'ilmi@gmail.com', 'Bogor', 26, true));


console.info(objects);
