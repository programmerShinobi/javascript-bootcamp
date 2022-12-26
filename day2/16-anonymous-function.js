let show = function () {
    console.info('Anonymous function');
}

show();

let person = {
    firstName: 'Faqih',
    middleName: 'Pratama',
    lastName: 'Muhti'
};

(function () {
    console.info(person.firstName + ' ' + person.middleName + ' ' + person.lastName);
})(person);

(function (obj) {
    console.info(obj.firstName + ' ' + obj.middleName + ' ' + obj.lastName);
})(person);


function driveACar() {
    setTimeout(function () {
        console.info("Engine start ...");

    }, 1000);

    setTimeout(function () {
        console.info("Masukkan gear 1  to move a car");
    }, 2000);

    setTimeout(function () {
        console.info("Mobil berjalan");
    }, 3000);

    setTimeout(function () {
        console.info("Mobil berhenti ...");
    }, 4000);
}

driveACar();

