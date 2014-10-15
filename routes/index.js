var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Web API Continuous Integration and Test - Danny' });
});

module.exports = router;
