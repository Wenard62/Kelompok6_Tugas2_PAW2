var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact', function(req, res, next) {
   res.render('contact', {title: 'halaman contact', layout: 'main'});
});

module.exports = router;
