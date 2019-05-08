"use strict";
exports.__esModule = true;
var ApplicationFormModel_1 = require("../model/ApplicationFormModel");
// Creates and configures an ExpressJS web server.
var ApplicationFormRoute = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function ApplicationFormRoute() {
        this.applicationForm = new ApplicationFormModel_1.ApplicationFormModel();
    }
    ApplicationFormRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // Configure API endpoints.
    ApplicationFormRoute.prototype.routes = function (router) {
        var _this = this;
        //get by id
        router.get('/applicationForm/:applicationFormID', function (req, res) {
            console.log('try to get applicationFormID:', applicationFormID);
            var applicationFormID = req.params.applicationFormID;
            _this.applicationForm.getApplicationFormByID(res, applicationFormID);
        });
        router["delete"]('/applicationForm/:applicationFormID', function (req, res) {
            console.log('try to delete applicationFormID:', applicationFormID);
            var applicationFormID = req.params.applicationFormID;
            _this.applicationForm.deleteApplicationForm(res, applicationFormID);
        });
        router.put('/applicationForm/:applicationFormID', function (req, res) {
            console.log('try to update applicationFormID:', applicationFormID);
            var applicationFormID = req.params.applicationFormID;
            var newapplicationForm = req.body;
            _this.applicationForm.updateApplicationForm(res, applicationFormID, newapplicationForm);
        });
        router.post('/applicationForm', function (req, res) {
            console.log('try to create:', newapplicationForm);
            var newapplicationForm = req.body;
            _this.applicationForm.createApplicationForm(res, newapplicationForm);
        });
    };
    return ApplicationFormRoute;
}());
exports.ApplicationFormRoute = ApplicationFormRoute;
