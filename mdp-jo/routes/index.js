var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   const berita= [
        {
            judul: "berita 1",
            isi : "isi berita 1"
        },
        {
            judul: "berita 2",
            isi : "isi berita 2"
        },
    ];
    res.render('index', {title: 'halaman home',berita, layout: 'main'});
});
router.get('/about', function(req, res, next) {
   res.render('aboutus', {title: 'halaman about us', layout: 'main' });
});
router.get('/contact', function(req, res, next) {
   res.render('contact', {title: 'halaman contact', layout: 'main'});
});
router.get('/prodi', function(req, res, next) {
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
