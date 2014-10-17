var expect = require('chai').expect;
var mongoose = require('mongoose');
var jobModel = require('../models/Job');
var promise = require('bluebird');

function resetJobs() {
    return new promise( function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}
describe("get jobs", function(){
    this.timeout(15000);
    it("should always be job since they are seeded", function(done){
        mongoose.connect('mongodb://scrumdan:abc123@ds039960.mongolab.com:39960/mongogo', function(){
            resetJobs().then(function() {
                jobModel.seedJobs(function() {
                    mongoose.model('Job').find({}).exec(function(error, jobsList) {
                        expect(jobsList.length).to.be.at.least(1);
                        done();
                    });
                });
            });
        });
    });
});

//mongoose.connect('mongodb://localhost/jobfinder');
//function resetJobs(callback) {
////    return new promise(function(resolve, reject) {
////        mongoose.connection.collections['jobs'].drop(resolve, reject);
////    });
//    mongoose.connection.collections['jobs'].drop(callback);
//}