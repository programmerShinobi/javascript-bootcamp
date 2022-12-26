function beautifulBinaryString(binaryString) {
    // Inisialisasi penghitung untuk melacak jumlah operasi
    let operations = 0;
    let lengthOpertations = binaryString.length;

    // Ulangi karakter dalam string biner
    for (let i = 0; i < lengthOpertations; i++) {
        // If the current character is "0" and the next two characters form the substring "010", increment the counter and replace the current character with a "1"
        if (binaryString[i] === "0" && binaryString[i + 1] === "1" && binaryString[i + 2] === "0") {
            operations++;
            i += 2;
        }
    }

    // Mengembalikan jumlah operasi
    return operations;
}
// Uji fungsinya
console.log(beautifulBinaryString("0101010")); // 2
console.log(beautifulBinaryString("01100")); // 0
console.log(beautifulBinaryString("0100101010")); // 3
console.log(beautifulBinaryString("010010010")); // 3
console.log(beautifulBinaryString("0010010")); // 2

