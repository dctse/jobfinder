var mongoose = require('mongoose');
var promise = require('bluebird');
var jobModel = require('./models/Job');
var Job = mongoose.model('Job');

var jobs = [
    {title:'Cook', description:"You will be making steaks 1"},
    {title:'Waiter', description:"You will be serving food and beverage 2"},
    {title:'Programmer', description:"You will be writing javascript 3"},
    {title:'Flight Pilot', description:"You will be driving a plane 7"}
];

var findJobs = function(query) {
    return promise.cast(Job.find(query).exec());
};

exports.findJobs = findJobs;

exports.connectDB = promise.promisify(mongoose.connect, mongoose);

var createJob = promise.promisify(Job.create, Job);

exports.seedJobs = function() {
    return findJobs({}).then (function(collection){
        if(collection.length === 0) {
            return promise.map(jobs, function(job){
                return createJob(job);
            })
        }
    })
}