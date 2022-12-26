// 1.  Menampilkan hari input: 1 ... 7 Ouput Senin ~ Minggu

function namaHari(day) {
    switch (day) {
        case 1:
            return "Senin";
        case 2:
            return "Selasa";
        case 3:
            return "Rabu";
        case 4:
            return "Kamis";
        case 5:
            return "Jumat";
        case 6:
            return "Sabtu";
        case 7:
            return "Minggu";
        default:
            return "Input tidak valid";
    }
}

console.log(namaHari(1)); //  Senin
console.log(namaHari(2)); //  Selasa
console.log(namaHari(3)); //  Rabu
console.log(namaHari(4)); //  Kamis
console.log(namaHari(5)); //  Jumat
console.log(namaHari(6)); //  Sabtu
console.log(namaHari(7)); //  Minggu
