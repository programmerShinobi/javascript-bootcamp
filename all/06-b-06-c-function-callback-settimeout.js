// Functions => Callback Function with SetTimeot
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

// use setTimeout : supaya da delay callback
function driveACarTimeOut(callBackFunction) {
    setTimeout(() => {
        callBackFunction();
    }, 1000); // 1000 miliseconds

    setTimeout(() => {
        changeGear(1);
    }, 2000); // 2000 miliseconds

    setTimeout(() => {
        goCar();
    }, 3000); // 3000 miliseconds

    setTimeout(() => {
        stopCar();
    }, 4000); // 4000 miliseconds

    setTimeout(() => {
        shutDownEngine();
    }, 5000); // 5000 miliseconds
}

driveACarTimeOut(startEngine);