function cetakObject() {
    let user = {
        nama: "Nadia Ratnasari",
        asal: "Yogyakarta",
        umur: 21,
        makananFavorit : "Gudeg"
    }

    for(let i in user) {
        console.log(i + " : " + user[i]);
    }
}

cetakObject();