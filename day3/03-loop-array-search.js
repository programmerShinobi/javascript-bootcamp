const foods = ["sup", "pizza", "pasta"];

// display food with loop
for (let i = 0; i < foods.length; i++) {
    console.info(foods[i]);
}
console.info(`\n`);

// foreach
foods.forEach(e => console.info(e));
console.info(`\n`);

// for of
for (const el of foods) {
    console.info(el);
}
console.info(`\n`);

// search element of array
for (let j = 0; j < foods.length; j++) {
    if (foods[j] === "pizza") {
        console.info("Pizza ada di index ke :" + j);
    }
}
console.info(`\n`);

function findFood(foodName) {
    for (let j = 0; j < foods.length; j++) {
        if (foods[j] === foodName) {
            return `${foodName} ada di index ke : ${j}`;
        }
    }
}

console.info(findFood("pasta"))
