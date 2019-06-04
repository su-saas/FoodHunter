var chai = require('chai');
var chaiHttp = require('chai-http')

var expect = chai.expect;
chai.use(chaiHttp);

describe('Test getting one foodie', function(){
    var response;
    var responseBody;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/foodie/2")
			.end(function (err, res) {
                response = res;
                responseBody = res.body;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return only one foodie object', function (){
        expect(response).to.have.status(200);
        expect(responseBody).to.be.an("object");
    });

    it('Should have propertys', function (){
        expect(response).to.have.status(200);
		expect(responseBody).to.have.property('tagListID');
		expect(responseBody).to.have.property('userName');
		expect(responseBody).to.have.property('password');
		expect(responseBody).to.have.property('emailAddress');
		expect(responseBody, 'Property: userType').to.have.property('userType').that.is.a('number');
        expect(responseBody, 'Property: favoriteListID').to.have.property('favoriteListID').that.is.a('number');
		expect(responseBody, 'Property: userID').to.have.property('userID').that.is.a('number');
		
		
    });
});