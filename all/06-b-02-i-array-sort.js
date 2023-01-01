/**
 * Array.sort()
 * Method ini akan mengubah array yang asli,
 * sehingga elemen-elemen dalam array tersebut
 * akan terurut sesuai dengan urutan yang ditentukan
 * setelah method ini dijalankan.
 * 
 */

let arr = [5, 3, 2, 4, 1];
arr.sort();
console.info(arr);
// arr akan berisi [1, 2, 3, 4, 5]

let arr2 = ["ant", "cat", "bat", "dog"];
arr2.sort();
console.info(arr2);
// arr2 akan berisi ["ant", "bat", "cat", "dog"]

let arr3 = [{ name: "Bob" }, { name: "Alice" }, { name: "Eve" }];
arr3.sort((a, b) => a.name.localeCompare(b.name));
console.info(arr3);
// arr3 akan berisi [{name: "Alice"}, {name: "Bob"}, {name: "Eve"}]

