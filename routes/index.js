var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', active: 'index' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

module.exports = router;
