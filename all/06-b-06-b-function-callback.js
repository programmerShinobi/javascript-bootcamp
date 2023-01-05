// Functions => Callback Function
/**
 * CallBack function adalah function yang dikirim
 * sebagai parameter ke function lain
 * 
 */

function startEngine() {
    console.info("Engine start...");
}

function changeGear(gear) {
    console.info(`Masukkan gigi ${gear} to move a car`);
}

function goCar() {
    console.info("Mobil berjalan");
}

function stopCar() {
    console.info("Mobil berhenti");
}

function shutDownEngine() {
    console.info("Mesin mobil dimatikan");
}

// Call main function
function driveACar(callBackFunction) {
    callBackFunction();
    changeGear(1);
    goCar();
    stopCar();
    shutDownEngine();
}

driveACar(startEngine);