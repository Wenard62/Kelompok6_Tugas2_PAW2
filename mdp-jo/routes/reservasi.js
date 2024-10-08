var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/reservasi', function(req, res, next) {
   //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
    const reservasi = [
        {
            nama: "John Doe",
            tanggal: "2024-10-15",
            waktu: "18:00",
            jumlahOrang: 4
        },
        {
            nama: "Jane Smith",
            tanggal: "2024-10-16",
            waktu: "19:30",
            jumlahOrang: 2
        },
        {
            nama: "Michael Johnson",
            tanggal: "2024-10-17",
            waktu: "20:00",
            jumlahOrang: 3
        },
    ];
    
    res.render('reservasi', {title: 'halaman reservasi', reservasi, layout: 'main'});
});

module.exports = router;
