// Menampilkan karakter 'A' sampai 'Z' dengan loop
for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i));
}

// Menampilkan karakter 'a' sampai 'z' dengan loop
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
}

// Menampilkan karakter '0' sampai '9' dengan loop
for (let i = 48; i <= 57; i++) {
    console.log(String.fromCharCode(i));
}

// Mengubah kode ASCII ke string
const kodeASCII = [72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100];
const string = String.fromCharCode(...kodeASCII);
console.log(string);  // hasilnya "Hello, world"

