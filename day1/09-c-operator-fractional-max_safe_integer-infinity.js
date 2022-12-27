// Operator => Fractional, MAX_SAFE_INTEGER, Infinity

// Fractional
const x = 0.1 + 0.2;
const y = 0.3;
const z = x === y;
console.info(z); // return : false

const k = Math.abs(x - y) < Number.EPSILON;
console.info(k); //return true

// MAX_SAFE_INTEGER || MIN_SAFE_INTEGER
maxSafeInteger = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
console.info(maxSafeInteger); // return : true

minSafeInteger = Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2;
console.info(minSafeInteger); // return true

// Infinity : bilangan terbesar di JS
infinity_maxSafeInteger = Infinity > Number.MAX_SAFE_INTEGER;
console.info(infinity_maxSafeInteger); // return : true

infinity_maxSafeInteger2 = -Infinity < Number.MAX_SAFE_INTEGER;
console.info(infinity_maxSafeInteger2); // retur : true

infinity_maxSafeInteger3 = -Infinity - 32323323 == -Infinity - 1;
console.info(infinity_maxSafeInteger3); // return : true
