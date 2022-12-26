// arrow function
const startEngine = () => {
    console.info(`Engine start...`);
}

const changeGear = (gear) => {
    console.info(`Input gear ${gear} to move car`);
}

const goCar = () => {
    console.info("Car running");
}

const stopACar = () => {
    console.info("Car stop..");
}

const shutDownEngine = () => {
    console.info("Mesin mobil dimatikan");
}

// main function
const driveACar = (callBackFunction) => {
    callBackFunction();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}

driveACar(startEngine);
