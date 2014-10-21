var express = require('express');
var router = express.Router();
var JobsData = require("../jobs-data.js");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Web API Continuous Integration and Test - Danny' });
});

require("../jobs-service.js")(JobsData, router);
//router.get('/api/jobs', function(req, res) {
//    JobsData.findJobs().then(function(collection) {
//        res.send(collection);
//    });
//});
//router.post('/api/jobs', function (req, res) {
//    JobsData.saveJob(req.body);
//    res.end();
//});

module.exports = router;
