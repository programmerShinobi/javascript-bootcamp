// Buat 2 object array.
const tickets = [];

function insertTicket(ticket, array) {
    return new Promise((resolve, reject) => {
        // Cek apakah tiket merupakan objek yang valid
        if (validateTicket(ticket)) {
            // Tambahkan tiket ke dalam array setelah 2 detik
            setTimeout(() => {
                array.push(ticket);
                // Beri tahu bahwa tiket telah ditambahkan dengan sukses
                resolve();
            }, 2000);
        } else {
            // Beri tahu bahwa terjadi kesalahan saat menambahkan tiket
            reject(new Error("Invalid ticket"));
        }
    });
}

// Fungsi untuk memvalidasi tiket
function validateTicket(ticket) {
    // Cek apakah tiket memiliki nama dan harga yang valid
    return ticket.name && ticket.price && ticket.price > 0;
}

// Fungsi untuk memesan tiket
async function orderTicket(name, price, quantity, array) {
    try {
        // Buat objek tiket baru
        const ticket = { name, price };
        // Lakukan loop sebanyak quantity kali
        for (let i = 0; i < quantity; i++) {
            // Tambahkan tiket ke dalam array
            await insertTicket(ticket, array);
        }
        console.info(`${quantity} tickets for ${name} ordered successfully`);
    } catch (error) {
        console.error(error);
    }
}

// Pemanggilan fungsi orderTicket
orderTicket("Exhibition", 50, 5, tickets);
orderTicket("Contest", 30, 3, tickets);
orderTicket("Colloquium", 60, 7, tickets);

if (condition) {
    console.info(tickets);
}