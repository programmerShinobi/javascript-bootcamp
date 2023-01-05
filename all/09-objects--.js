/**
 * Objek
 * ===> Tipe data yang merepresentasikan koleksi pasangan nama-nilai.
 *      Objek dapat berisi beberapa properti,
 *      yang masing-masing terdiri dari nama dan nilai.
 *      Nilai dari properti dapat berupa tipe data apa pun, termasuk objek lain.
 */

const obj1 = {
    prop1: "value1 obj1",
    prop2: "value2 obj1",
    prop3: 123,
    prop4: true
};

const obj2 = new Object();
obj2.prop1 = "value1 obj2";
obj2.prop2 = "value2 obj2";
obj2.prop3 = 123;
obj2.prop4 = true;

console.log(obj1.prop1); // "value1"
console.log(obj2.prop1); // Output: "value1"






