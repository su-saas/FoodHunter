var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;

var http = require('http');
chai.use(chaiHttp);

var addr = "http://foodhunter.azurewebsites.net";

describe('Test restaurant list', function () {

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request(addr)
			.get("/restaurant")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
		expect(response.body).to.have.length.above(2);
		expect(response).to.have.headers;
    });

	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('userID');
					expect(body[i]).to.have.property('restaurantID');
                    expect(body[i]).to.have.property('restaurantName');
                    expect(body[i]).to.have.property('address');
                    expect(body[i]).to.have.property('phoneNum');
                    expect(body[i]).to.have.property('hours');
                    expect(body[i]).to.have.property('averagePrice');
				}
				return true;
			});
	});	
	
});