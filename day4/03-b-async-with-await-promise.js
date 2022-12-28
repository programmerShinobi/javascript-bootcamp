const getNomorAntri = (nomor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(nomor);
            // reject(nomor);
            console.info(nomor);
        }, 10000);
    });
}

const pilihPaket = (nomor, paket) => {
    return new Promise((resolve, reject) => {
        let messages;
        if (nomor <= 10 || (isNaN(nomor))) {
            throw new Error('Silahkan antri');
        } else {
            if (paket === "A") {
                messages = "KFC Paket A";
            } else {
                messages = "KFC Paket B";
            }
        }

        setTimeout(() => {
            resolve(messages);
            reject(messages);
            console.info(messages);
        }, 7000);
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

        setTimeout(() => {
            resolve(packages);
            // reject(packages);
            console.info(packages);
        }, 4000);
    });
}

const orderKFC = async (paket) => {
    const nomorAntri = await getNomorAntri(5);
    const menu = await pilihPaket(nomorAntri, paket);
    const total = await tagihan(menu);
    return [nomorAntri, menu, total];
}

orderKFC("A").then(res => console.info(res))
    .catch(Err => console.error(Err.toString()));
