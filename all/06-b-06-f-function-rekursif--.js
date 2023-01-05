/**
 * Fungsi Rekursif
 * ===> Fungsi yang memanggil dirinya sendiri secara terus-menerus
 *      sampai tercapai kondisi penghentian tertentu.
 *      Fungsi rekursif berguna untuk menyelesaikan masalah
 *      yang dapat dibagi menjadi submasalah yang lebih kecil yang sama
 *      dengan masalah yang lebih besar.
 *      
 */


// fungsi faktorial
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120
//--------------------------------------

// Mencari nilai maksimal dari sebuah array
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = findMax(arr.slice(1));
    return (arr[0] > maxOfRest) ? arr[0] : maxOfRest;
}

console.log(findMax([1, 3, 5, 2, 4]));  // 5
//-------------------------------------

// Menghitung jumlah elemen dalam sebuah array
function countElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return 1 + countElements(arr.slice(1));
}

console.log(countElements([1, 3, 5, 2, 4]));  // 5
//--------------------------------------

// Menghitung jumlah elemen yang sesuai dengan kriteria tertentu dalam sebuah array
function countEven(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr[0] % 2 === 0) {
        return 1 + countEven(arr.slice(1));
    }
    return countEven(arr.slice(1));
}

console.log(countEven([1, 3, 5, 2, 4]));  // 2
//--------------------------------------

// Mencari elemen terkecil dalam sebuah array
function findMin(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const minOfRest = findMin(arr.slice(1));
    return (arr[0] < minOfRest) ? arr[0] : minOfRest;
}

console.log(findMin([1, 3, 5, 2, 4]));  // 1
//-------------------------------------

// Merubah array menjadi sebuah string
function arrayToString(arr) {
    if (arr.length === 0) {
        return '';
    }
    return arr[0] + arrayToString(arr.slice(1));
}

console.log(arrayToString([1, 3, 5, 2, 4]));
//-------------------------------------

// Mencari elemen di dalam sebuah array
function findElement(arr, element) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === element) {
        return true;
    }
    return findElement(arr.slice(1), element);
}

console.log(findElement([1, 3, 5, 2, 4], 5));  // true
console.log(findElement([1, 3, 5, 2, 4], 6));  // false
//-------------------------------------

// Menghitung jumlah karakter di dalam sebuah string
function countChar(str) {
    if (str.length === 0) {
        return 0;
    }
    return 1 + countChar(str.slice(1));
}

console.log(countChar('hello'));  // 5
//------------------------------------

// Mencari karakter di dalam sebuah string
function findChar(str, char) {
    if (str.length === 0) {
        return false;
    }
    if (str[0] === char) {
        return true;
    }
    return findChar(str.slice(1), char);
}

console.log(findChar('hello', 'l'));  // true
//----------------------------------

// Mencari kata di dalam sebuah string
function findWord(str, word) {
    if (str.length < word.length) {
        return false;
    }
    if (str.slice(0, word.length) === word) {
        return true;
    }
    return findWord(str.slice(1), word);
}

console.log(findWord('the quick brown fox', 'quick'));  // true
console.log(findWord('the quick brown fox', 'fox'));  // true
console.log(findWord('the quick brown fox', 'cat'));  // false
//-----------------------------------------

// Menghitung jumlah kata di dalam sebuah string
function countWords(str) {
    if (str.length === 0) {
        return 0;
    }
    if (str[0] === ' ') {
        return countWords(str.slice(1));
    }
    return 1 + countWords(str.slice(1));
}

console.log(countWords('the quick brown fox'));  // 4
//--------------------------------------------