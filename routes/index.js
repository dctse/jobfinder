var express = require('express');
var router = express.Router();
var JobsData = require("../jobs-data.js");
//var csrf = require('csurf');
/* GET home page. */

function csrf_assign(req, res, next) {
    res.locals.token = req.session._csrf;
    next();
}
//router.get('/', function(req, res) {
//  res.render('index', { title: 'Web API Continuous Integration and Test - Danny' });
//});

router.get('/', function(req, res) {
//    req.session.name = req.session.name || new Date().toUTCString();
//    console.log(req.sessionID);
//    res.send(req.session.name);
//    if (req.cookies.beenHereBefore === 'yes') {
//        res.send('this cookies is sent and pass back.');
//    } else {
//        res.cookie('beenHereBefore', 'yes');
//        res.send('first Time user visit my site');
//
//    }
//    res.end;
    res.render('index', { title: 'Express API Continuous Integration and Test via codeship - Danny' });
});
router.get('/clear', function(req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
});
router.get('/customer/:id', function(req, res) {
//    res.send('customer ID is ' + req.params.id);
    res.send('customer ID is ' + req.params['id']);
});

// using query string ? to pass parameter
router.get('/customer', function(req, res) {
    res.send('customer ID is ' + req.query['id']);
});

//using pattern to route
router.get(/^\/range\/(\d+)(?:\.\.(\d+))?$/, function(req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('regular expression /range/ from  ' + from + '..' + to);
});

router.get('/:viewname', function(req, res) {
//    res.send('customer ID is ' + req.params.id);
    res.render(req.params['viewname']);
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
