var mongoose = require('mongoose');
var promise = require('bluebird');

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

//exports.seedJobs = function() {
//    return new promise(function(resolve, reject){
//        Job.find({}).exec(function(error, collection){
//            if(collection.length === 0) {
//                Job.create({title:'Cook', description:"You will be making steaks 1"});
//                Job.create({title:'Waiter', description:"You will be serving food and beverage 2"});
//                Job.create({title:'Programmer', description:"You will be writing javascript 3"});
//                Job.create({title:'Flight Pilot', description:"You will be driving a plane 7"}, resolve, reject)
//            }
//        })
//    });
//}
exports.seedJobs = function(callback) {
        Job.find({}).exec(function(error, collection){
            if(collection.length === 0) {
                Job.create({title:'Cook', description:"You will be making steaks"});
                Job.create({title:'Waiter', description:"You will be serving food and beverage"});
                Job.create({title:'Programmer', description:"You will be writing javascript"});
                Job.create({title:'Flight Pilot', description:"You will be driving a plane 5"}, callback)
            }
        })
}