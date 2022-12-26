const add = (x, y) => x + y;

let result = 0;

try {
    let result = add(10, 20);
    console.log(result);
} catch (e) {
    console.error({ name: e.name, message: e.message });
} finally {
    console.info("Program Code JS Run ..")
}

console.log('Bye');

