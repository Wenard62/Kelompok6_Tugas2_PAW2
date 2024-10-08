var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
   res.render('aboutus', {title: 'halaman about us', layout: 'main' });
});

module.exports = router;
