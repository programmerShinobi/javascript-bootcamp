const getNomorAntri = (nomor) => {
    return new Promise((resolve, reject) => {
        resolve(nomor);
        reject(nomor);
        setTimeout(() => {
            console.info(nomor);
        }, 1000);
    });
}

const pilihPaket = (nomor, paket) => {
    return new Promise((resolve, reject) => {
        let messages;
        if (nomor <= 10 && (isNaN(nomor))) {
            messages = 'Silahkan antri';
        } else {
            if (paket === "A") {
                messages = "KFC Paket A";
            } else {
                messages = "KFC Paket B";
            }
        }

        resolve(messages);
        reject(messages);

        setTimeout(() => {
            console.info(messages);
        }, 2000);
    });
}

const tagihan = (paket) => {
    return new Promise((resolve, reject) => {
        let packages;
        if (paket === "A") {
            packages = 25000;
        } else {
            packages = 24000;
        }

        resolve(packages);
        reject(packages);

        setTimeout(() => {
            console.info(packages);
        }, 3000);
    });
}

const orderKFC = async (paket) => {
    const nomorAntri = await getNomorAntri(11);
    const menu = await pilihPaket(nomorAntri, paket);
    const total = await tagihan(menu);
    return [nomorAntri, menu, total];
}

orderKFC("A").then(res => console.info(res));
