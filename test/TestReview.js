var chai = require('chai');
var chaiHttp = require('chai-http')

var expect = chai.expect;
chai.use(chaiHttp);

var addr = "http://foodhunter.azurewebsites.net";

describe('Testing get one review', function(){
    var response;
    var responseBody;

    before(function (done) {
        chai.request(addr)
			.get("/review/1")
			.end(function (err, res) {
                response = res;
                responseBody = res.body[0];
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return only one review object', function (){
        expect(responseBody).to.be.an("object");
    });

    it('Should have propertys', function (){
		expect(responseBody).to.have.property('reviewID').that.is.a('number');
		expect(responseBody).to.have.property('userID').that.is.a('number');
		expect(responseBody).to.have.property('restaurantID').that.is.a('number');
        expect(responseBody).to.have.property('title').that.is.a('string');
        expect(responseBody).to.have.property('content').that.is.a('string');
        expect(responseBody).to.have.property('date').that.is.a('string');
    });
});

describe('Testing post one new review', function(){
    var response;
    var responseBody;

    before(function (done) {
        chai.request(addr)
            .post("/review")
            .send({userID: 1, restaurantID: 10, title: "Goooood view", content: "I like this place", date: '2019-02-01T01:00:00'})
			.end(function (err, res) {
                response = res;
                responseBody = res.body;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return only one review ID', function (){
        expect(responseBody).to.be.a('number');
    });
});