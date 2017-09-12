var express = require('express');
var router = express.Router();/* GET home page. */

router.get('/', function(req, res, next) {
 res.render('login', { title: 'Halaman Index' });
});

router.post('/', function(req, res, next) {
 res.render('index');
});

router.get('/index', function(req, res, next) {
 res.render('index', { title: 'Halaman Index' });
});

module.exports = router;
