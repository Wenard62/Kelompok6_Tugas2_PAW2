var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/menu', function(req, res, next) {
   //res.send("contact us");
    //res.sendFile(__dirname + "/contact.html");
    const menu = [
        {
            nama: "Nasi Goreng",
            kategori: "Makanan",
            kode: "NG"
        },
        {
            nama: "Ayam Bakar",
            kategori: "Makanan",
            kode: "AB"
        },
        {
            nama: "Sate Ayam",
            kategori: "Makanan",
            kode: "SA"
        },
        {
            nama: "Es Teh Manis",
            kategori: "Minuman",
            kode: "ETM"
        },
        {
            nama: "Kopi Hitam",
            kategori: "Minuman",
            kode: "KH"
        },
        {
            nama: "Jus Alpukat",
            kategori: "Minuman",
            kode: "JA"
        },
    ];
    
    
    res.render('menu', {title: 'halaman menu', menu, layout: 'main'});
});

module.exports = router;