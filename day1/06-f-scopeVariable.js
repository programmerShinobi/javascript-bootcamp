var message = 'Hi';

function say() {
    var message = 'hello';
    console.info(message);
}

say();
console.info(message);

let x = 10;
if (x == 10) {
    console.log(message);
}

say();

var y = 20;

function bar() {
    var y = 200;

    function baz() {
        console.info(y);
    }
    console.info(baz());
}

const nama = {
    namaDepan: 'Faqih',
    namaBelakang: 'Pratama'
};

nama = {
    namaDepan: 'Ilmi',
    namaBelakang: 'Alimuding'
}; // Akan langsung menghasilkan error: invalid