var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jobModel = require('../models/Job');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Web API Continuous Integration and Test - Danny' });
});

router.get('/api/jobs', function(req, res) {
    mongoose.model('Job').find({}).exec(function(error,collection) {
        res.send(collection);
    });

//    res.render('index', { title: 'Web API Continuous Integration and Test - Danny' });
});
module.exports = router;
