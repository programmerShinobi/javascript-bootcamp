const getNomorAntri = (nomor) => {
    setTimeout(() => {
        console.info(nomor);
    }, 1000);
    return nomor;
}

const pilihPaket = (nomor, paket) => {
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

    setTimeout(() => {
        console.info(messages);
    }, 2000);
    return messages;
}

const tagihan = (paket) => {
    let packages;
    if (paket === "A") {
        packages = 25000;
    } else {
        packages = 24000;
    }

    setTimeout(() => {
        console.info(packages);
    }, 3000);
    return packages;
}

const orderKFC = async (paket) => {
    const nomorAntri = await getNomorAntri(11);
    const menu = await pilihPaket(nomorAntri, paket);
    const total = await tagihan(menu);
    return [nomorAntri, menu, total];
}

orderKFC("A").then(res => console.info(res));
