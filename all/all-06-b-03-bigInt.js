/**
 * BigInt :
 * ===> Nilai integer yang dapat ditampung oleh BigInt
 *      sangat jauh lebih besar daripada nilai integer yang dapat ditampung
 *      oleh tipe data Number standar di JavaScript,
 *      yang hanya dapat menyimpan nilai integer hingga +/- 2^53-1
 * 
 */

function factorial(n) {
    let result = 1n;
    for (let i = 1n; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(100n));
