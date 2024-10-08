var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nama', function(req, res, next) {
   //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
    const nama = [
        {
            nama: "Budi Santoso",
            kota: "Jakarta",
            usia: 25,
            jenisKelamin: "Laki-laki"
        },
        {
            nama: "Siti Rahmawati",
            kota: "Bandung",
            usia: 22,
            jenisKelamin: "Perempuan"
        },
        {
            nama: "Andi Pratama",
            kota: "Surabaya",
            usia: 30,
            jenisKelamin: "Laki-laki"
        },
        {
            nama: "Dewi Lestari",
            kota: "Semarang",
            usia: 28,
            jenisKelamin: "Perempuan"
        },
        {
            nama: "Rizky Ramadhan",
            kota: "Yogyakarta",
            usia: 23,
            jenisKelamin: "Laki-laki"
        },
        {
            nama: "Fadila Putri",
            kota: "Medan",
            usia: 26,
            jenisKelamin: "Perempuan"
        }
    ];
    
    res.render('nama', {title: 'halaman nama', nama, layout: 'main'});
});

module.exports = router;