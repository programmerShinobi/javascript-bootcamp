// Function => Arrow Function
/**
 * kita bisa buat function tanpa memakai keyword
 * function dan gunakan tanda panah
 * arrow const akan disimpan dalam variable
 */

const startEngine = () => {
    console.info("Engine start..");
}

const changeGear = (gear) => {
    console.info(`Masukan gigi ${gear} to move a car`);
}

const goCar = () => {
    console.info("Mobile berjan");
}

const stopACar = () => {
    console.info("Mobil berhenti");
}

const shutDownEngine = () => {
    console.info("Mesin mobil dimatikan");
}


// call main const
const driveACar = (callBackconst) => {
    callBackconst();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}

driveACar(startEngine);