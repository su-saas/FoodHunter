var chai = require('chai');
var chaiHttp = require('chai-http')

var expect = chai.expect;
chai.use(chaiHttp);

var addr = "http://foodhunterapp.azurewebsites.net";

describe('Test tag list', function(){
    var response;
    var responseBody;
		 
    before(function (done) {
        chai.request(addr)
			.get("/tag/1")
			.end(function (err, res) {
                response = res;
                responseBody = res.body;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return only one tag object', function (){
        expect(response).to.have.status(200);
        expect(responseBody).to.be.an("object");
    });

    it('Should have propertys', function (){
        expect(response).to.have.status(200);
        expect(responseBody).to.have.property('_id');
        expect(responseBody, 'Property: tagID').to.have.property('tagID').that.is.a('number');
        expect(responseBody, 'Property: tagName').to.have.property('tagName').that.is.a('string');
    });
});