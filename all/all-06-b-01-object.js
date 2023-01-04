/**
 * Object Type
 * ---> Kumpulan dari properties, dimana properties
 *      adalah pasangan key dan nilainya
 * ---> Cara akses data pada Object Type:
 *      - Menggunakan dot notation (.)
 *      - Menggunakan kurung siku (membaca index)
 * 
 */

// object general
const obj1 = {
    key1: 'value 1',
    key2: 'value 2',
    key3: 'value 3'
};
console.info(obj1);

//---------------------------------------------------

// metode (function) 
const obj2 = {
    key1: 'value 1',
    key2: 'value 2',
    key3: 'value 3',
    getKey1: function () {
        return this.key1;
    }
};
console.log(obj2.getKey1());  // 'value 1'

//--------------------------------------------------

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.make);  // 'Toyota'
console.log(car1.model);  // 'Camry'
console.log(car1.year);  // 2020

//--------------------------------------------------
