var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require("../../models/Job.js");
var promise = require('bluebird');
var JobsData = require("../../jobs-data.js");

function resetJobs() {
    return new promise( function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

describe("DB Layer get jobs - directly with mongoose", function(){

    var job = {"title":'Cook', "description":'You will be making steaks'};
    var jobs;

    before(function(done){
        JobsData.connectDB('mongodb://localhost/jobfinder')
            .then(resetJobs)
            .then(JobsData.seedJobs)
            .then(function(){return JobsData.saveJob(job)})
            .then(JobsData.findJobs)
            .then(function setJobs(collection) {
                jobs=collection;
                done();
            });

    });

//    after(function(){
//        mongoose.connection.close();
//    })

    it("should always be job since they are seeded", function() {
        expect(jobs.length).to.be.at.least(1);
    });

    it("should always a job have a title", function() {
        expect(jobs[0].title).to.not.be.empty;
    });
    it("should always a job have a description", function() {
        expect(jobs[0].description).to.not.be.empty;
    });

    it("should always one job after save one job", function() {
        expect(jobs).to.have.length(1);
    });

});
