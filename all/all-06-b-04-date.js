/**
 * Date()
 * ===> Objek Date digunakan untuk menangani tanggal dan waktu.
 *      Anda dapat menggunakan objek Date untuk mengambil tanggal dan waktu saat ini,
 *      mengubah format tanggal dan waktu, atau menghitung selisih tanggal.
 * 
 */

// Date
// Create object date wiht constructor
const today = new Date();
console.info(today.getFullYear()); // 2022
console.info(today.getMonth()); // 12
console.info(today.getDate()); // 28

// get info hour minute
const hours = today.getHours();
const minute = today.getMinutes();
console.info(`Jam ${hours}:${minute}`); // Jam 6:13

//  create new Date with argument
const tomorrow = new Date(2022, 12, 29);
console.info(tomorrow); // 2023-01-28T17:00:00.000Z

// initial date with formatted date
const eventDate = new Date('2022-12-01T03:24:00Z');
console.info(eventDate); //2022-12-01T03:24:00.000Z

// adding date
const now = new Date();
const currentDate = now.getDate();
now.setDate(currentDate + 1);
console.info(`Tanggal esok ${now}`); // Tanggal esok Thu Dec 29 2022 06:13:24 GMT+0700 (Indochina Time)

// clone the date
const futureDate = new Date(now.getTime());
console.info(futureDate); // 2022-12-28T23:13:24.016Z

// change the cloned date
futureDate.setDate(now.getDate() + 7);
console.info(`one weeks from ${now} os ${futureDate}`); // one weeks from Thu Dec 29 2022 06:13:24 GMT+0700 (Indochina Time) os Thu Jan 05 2023 06:13:24 GMT+0700 (Indochina Time)

console.info(`Format Date ; ${new Intl.DateTimeFormat('id-ID').format(now)}`); // Format Date ; 29/12/2022

const oldDay = new Date(1995, 10, 20);
const newerDay = new Date(2023, 1, 1);
if (newerDay > oldDay) {
    console.info("You old"); // You old
}

// Convert Date
const date = new Date(2021, 0, 1, 10, 30);
let dateString;
dateString = date.toString();
console.info(dateString); // Fri Jan 01 2021 10:30:00 GMT+0700 (Indochina Time)

dateString = date.toTimeString();
console.info(dateString); // 10:30:00 GMT+0700 (Indochina Time)

dateString = date.toUTCString();
console.info(dateString); // Fri, 01 Jan 2021 03:30:00 GMT

dateString = date.toDateString();
console.info(dateString); // Fri Jan 01 2021

dateString = date.toISOString();
console.info(dateString); // 2021-01-01T03:30:00.000Z

dateString = date.toLocaleDateString();
console.info(dateString); // 1/1/2021

dateString = date.toLocaleTimeString();
console.info(dateString); // 10:30:00 AM

const now2 = new Date();
console.log(`${now2.getMonth() + 1}/${now2.getDate()}/${now2.getFullYear()}`); // 1/5/2023
