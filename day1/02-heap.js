let person = {
    nama: 'Jhon',
    age: 25
}

console.info(person);
console.info('Nama :' + person.nama);
console.info('Umur :' + person.age);

let member = person;
console.info(member);

member.age = 27;
person.nama = 'Budi';
console.info(person);
console.info(member);
