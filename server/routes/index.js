var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/vanilla', function(req, res, next) {
  res.render('index', {fileName: 'vanilla'});
});

router.get('/react', function(req, res, next) {
  res.render('index', {fileName: 'react'});
});

router.get('/angular', function(req, res, next) {
  res.render('index', {fileName: 'angular'});
});

module.exports = router;
