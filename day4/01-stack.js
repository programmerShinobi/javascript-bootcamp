const arr = ['a', 'b', 'c', 'd'];
console.info(arr[2]);

let arrayList = [];
console.info(arrayList);

for (let i = 2; i < 20; i++) {
    arrayList.push(i);
}
console.info(arrayList);

arrayList.pop();
console.info(arrayList);

let hsl = '';
// for (let e of arrayList) {
//     hsl += (e + 3) + ' ';
// }
// console.info(hsl);


// arrayList.forEach(e => {
//     console.info(hsl += (e + 3) + ' ')
// });

arrayList.map(arr => {
    console.info(hsl += (arr + 3) + ' ')
});