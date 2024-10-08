var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prodi', function(req, res, next) {
   //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
     const prodi= [
        {
            nama: "sistem informasi",
            fakultas : "FIKR",
            singkatan : "SI"
        },
        {
            nama: "informatika",
            fakultas : "FIKR",
            singkatan : "IF"
        },
        {
            nama: "teknik elektro",
            fakultas : "FIKR",
            singkatan : "TE"
        },
        {
            nama: "manajemen informatika",
            fakultas : "FIKR",
            singkatan : "MI"
        },
        {
            nama: "manajemen",
            fakultas : "FEB",
            singkatan : "MJ"
        },
        {
            nama: "akutansi",
            fakultas : "FEB",
            singkatan : "AK"
        },
    ];
    res.render('prodi', {title: 'halaman prodi', prodi, layout: 'main'});
});

module.exports = router;
