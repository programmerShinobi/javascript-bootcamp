// Functions => Anonymous Function
/**
 * function tidak bernama, 
 * biasanya hanya digunakan sekali pakai
 * atau tidak reusable
 * 
 */

function driveACar() {
    setTimeout(function () {
        console.info("Engine start...");
    }, 1000);

    setTimeout(function () {
        console.info(`Masukan gigi 1 to move a car`);
    }, 2000);

    setTimeout(function () {
        console.info("Mobil berjalan");
    }, 3000);

    setTimeout(function () {
        console.info("Mobil berhenti...");
    }, 30000);
}

// call main function
driveACar();
