var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/Job');
var promise = require('bluebird');
var JobsData = require("../jobs-data.js");

function resetJobs() {
    return new promise( function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

describe("get jobs", function(){
    var jobs;

    before(function(done){
        JobsData.connectDB('mongodb://localhost/jobfinder')
            .then(resetJobs)
            .then(JobsData.seedJobs)
            .then(JobsData.findJobs)
            .then(function (collection) {
                jobs=collection;
                done();
            });

    })
    it("should always be job since they are seeded", function() {
        expect(jobs.length).to.be.at.least(1);
    });

    it("should always a job have a title", function() {
        expect(jobs[0].title).to.not.be.empty;
    });
    it("should always a job have a description", function() {
        expect(jobs[0].description).to.not.be.empty;
    });
});

//mongoose.connect('mongodb://localhost/jobfinder');
//function resetJobs(callback) {
////    return new promise(function(resolve, reject) {
////        mongoose.connection.collections['jobs'].drop(resolve, reject);
////    });
//    mongoose.connection.collections['jobs'].drop(callback);
//}