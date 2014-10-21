// all the http services of the app.
var bodyParser = require('body-parser');
var JobsData = require("./jobs-data.js");

module.exports = function(db, app) {
    app.use(bodyParser.json());
    app.post('/api/jobs', function (req, res) {
        db.saveJob(req.body);
        res.end();
    });
    app.get('/api/jobs', function(req, res) {
        db.findJobs().then(function(collection) {
            res.send(collection);
        });
    });
}

