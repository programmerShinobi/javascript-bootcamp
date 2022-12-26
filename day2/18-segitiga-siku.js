let baris = '';
function segitigaSiku(jumlahBaris) {
    baris += '*';

    let index = jumlahBaris + 1;

    if (index <= 10) {
        console.info(baris);
        segitigaSiku(index);
    }
}

segitigaSiku(1);

// for (let i = 1; i <= 5; i++) {
//     // Buat string kosong untuk menyimpan baris segitiga
//     let row = '';

//     // Tambahkan tanda sesuai dengan jumlah yang diinginkan ke dalam string
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }

//     // Cetak baris segitiga ke console
//     console.log(row);
// }
