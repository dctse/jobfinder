var mongoose = require('mongoose');
var promise = require('bluebird');
var jobModel = require('./models/Job');
var Job = mongoose.model('Job');

// prepare job to mongodb. use mongoose, model, bluebird
var jobs = [
    {title:'Cook', description:"You will be making steaks 1"},
    {title:'Waiter', description:"You will be serving food and beverage 2"},
    {title:'Programmer', description:"You will be writing javascript 3"},
    {title:'Flight Pilot', description:"You will be driving a plane 4"}
];

var findJobs = function(query) {
    return promise.cast(Job.find(query).exec());
};

var createJob = promise.promisify(Job.create, Job);

exports.findJobs = findJobs;

exports.connectDB = promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob;

exports.seedJobs = function() {
    return findJobs({}).then (function(collection){
        if(collection.length === 0) {
            return promise.map(jobs, function(job){
                return createJob(job);
            })
        }
    })
}