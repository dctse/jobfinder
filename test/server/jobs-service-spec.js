var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');
var Promise = require('bluebird');

var dataSavedJob;

var db = {
    saveJob: function(job) {
//        if (job.title.length<4 || job.title.length >40) {
//            dataSavedJob = {};
//        } else {
            dataSavedJob = job;
//        }
    },
    findJobs: function() {
        return new Promise(function(resolve, reject){
            resolve(["hi"]);
        })
    }
};

var jobService = require('../../jobs-service')(db, app);

describe("Server Service Get Jobs via data layer without knowing mongoose", function () {
    it("should return a none empty list of job in json format.", function(done){
        request(app).get('/api/jobs')
            .expect('Content-type', /json/)
            .end(function(err,res){
                expect(res.body).to.be.a('Array');
                done();
            });
    });
});

describe("Server Save Job", function (){

    var job = {"title":'Cook', "description":'You will be making steaks'};
    var jobs;

//    before(function(done){
//        JobsData.connectDB('mongodb://localhost/jobfinder')
//            .then(resetJobs)
////            .then(JobsData.seedJobs)
//            .then(function(){JobsData.saveJob(job)})
//            .then(JobsData.findJobs)
//            .then(function setJobs(collection) {
//                jobs=collection;
//                done();
//            });
//
//    })

//    after(function(){
//        JobsData.connection.close();
//    })

    var newJob =  {"title":'Coo', "description":'You will be making steaks 1'};
    it("should validate title that should have more than 4 characters.");
//    it("should validate title that should have more than 4 characters.", function(done){
//        request(app).post('/api/jobs').send(newJob).end(function (err, res) {
//            expect(dataSavedJob).to.have.length(1);
//            done();
//        });
//    });
    it("should validate title that should have less than 40 characters.");
    it("should validate description that should have more than 4 characters.");
    it("should validate description that should have less than 250 characters.");

    var newJob =  {"title":'Cook', "description":'You will be making steaks 1'};

    it("should save to database as http post to server layer", function(done) {
        request(app).post('/api/jobs').send(newJob).end(function (err, res) {
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        });
    });
    it("should pass status 200 to client if saved to database.");

    it("should return a job id if saved.");
    it("should return error if not saved to database.");
});

