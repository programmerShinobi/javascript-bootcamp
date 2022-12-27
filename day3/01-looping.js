//  1
let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
    console.info(ranks[i]);
}
console.info(`\n`);

// 2
for (let rank of ranks) {
    console.info(rank);
}
console.info(`\n`);

// 3
let colors = ['Red', 'Green', 'Blue'];
for (const [index, color] of colors.entries()) {
    console.info(`${color} is at index ${index}`);
}
console.info(`\n`);


//  for (.. of ..) : satu data ---
const user = {
    name: 'Faqih Pratama Muhti',
    email: 'faqihpratamamuhti',
    age: 27,
    date: '12/01/1995',
    acrive: true
};

for (const key in user) {
    console.info(`${key}: ${user[key]}`);
}
console.info(`\n`);


// for(.. in ..) : banyak data ---
const users = [
    {
        name: 'Faqih Pratama Muhti',
        email: 'faqihpratamamuhti@gmail.com',
        age: 27,
        date: '12/01/1995',
        active: true
    },
    {
        name: 'Ilmi Alimudin',
        email: 'ilmialimudin@gmail.com',
        age: 23,
        date: '11/11/2000',
        active: false
    }
];

for (const u of users) {
    console.info(`${u.name}`)
};


console.info(`\n`);
for (const user of users) {
    // console.info(`${u.name}`)
    for (const user1 in user) {
        console.info(`:` + user[user1]);
    }
};
console.info(`\n`);

// iterasi persegi panjang
let lastCount = 0;
for (let i = 0; i < 5; i++) {
    let concat = 0;
    for (let j = 1; j < 5; j++) {
        concat = concat + (i + j) + " "
    }
    console.info(concat);
    console.info();
}

// iterasi segitiga siku
for (let i = 0; i < 6; i++) {
    let concat = "";
    for (let j = i; j < 6; j++) {
        concat = j - i + " " + concat
    }
    console.info(concat.replace("0", ""));
    console.info()
}
console.info(`\n`);

const n = 6;
let concat = " ";
let angka = "# ";
for (let i = 1; i <= n; i++) {
    concat = concat.repeat(n - 1) + angka.repeat(i);
    console.info(concat);
    concat = " ";
}
console.info(`\n`);

// iterasi segitiga sama sisi
const m = 6;
let concat2 = " ";
let angka2 = "# ";
for (let i = 1; i <= m; i++) {
    concat2 = concat2.repeat(6 - i) + angka2.repeat(i);
    console.info(concat2);
    concat2 = " ";
}
console.info(`\n`);

// iterasi 1 ~ 10
for (let i = 0; i < 10; i++) {
    console.info(i + 1);
    if (i % 1 == 3) break;
}

// iterasi vertical
let strV = 0;
for (let i = 1; i < 10; i++) {
    console.info(i)
}
// iterasi horizontal
let strH = 0;
for (let i = 1; i < 10; i++) {
    strH = strH + " " + i
}
console.info(strH);

