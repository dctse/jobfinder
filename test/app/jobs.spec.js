//mocking the $httpbackend for karma to get return a response mocked
describe("Job Saved", function(){
    var postRequestJob;

    var newJob = {title:"test title", description:"Test Description"};

    beforeEach(module('app'));

    it("should work with /api/jobs angular to get data binding with a json format.", inject(function($httpBackend,jobs){
        $httpBackend.whenPOST("/api/jobs", function(data){
            postRequestJob = JSON.parse(data);
            expect(postRequestJob).to.not.be.empty;
            return true;
        }).respond(200);
        jobs.save(newJob);
        $httpBackend.flush();
    }));
})
