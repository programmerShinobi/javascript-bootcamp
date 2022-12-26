// call back function
function startEngine() {
    console.info(`Engine start...`);
}

function changeGear(gear) {
    console.info(`Input gear ${gear} to move car`);
}

function goCar() {
    console.info("Car running");
}

function stopACar() {
    console.info("Car stop..");
}

function shutDownEngine() {
    console.info("Mesin mobil dimatikan");
}

// main function
function driveACar(callBackFunction) {
    callBackFunction();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}

driveACar(startEngine);