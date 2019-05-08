<<<<<<< HEAD
"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ApplicationFormModel = /** @class */ (function () {
    function ApplicationFormModel() {
        this.createSchema();
        this.createModel();
    }
    ApplicationFormModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            formID: {
                type: Number,
                required: true,
                unique: true
            },
            restaurantID: {
                type: Number,
                required: true,
                unique: true
            },
            userID: {
                type: Number,
                required: true,
                unique: true
            },
            status: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            }
        }, { collection: 'applicationform' });
    };
    ApplicationFormModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("applicationform", this.schema);
    };
    //create applicationform
    //param: response, applicationform
    ApplicationFormModel.prototype.createApplicationForm = function (response, applicationform) {
        this.model(applicationform).save(function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully created application form!' });
        });
    };
    //get applicationform by id
    //param: response, formID
    ApplicationFormModel.prototype.getApplicationFormByID = function (response, formId) {
        var query = this.model.findOne({ formID: formId });
        query.exec(function (err, form) {
            if (err) {
                response.send(err);
            }
            response.json(form);
        });
    };
    //get all applicationforms
    //param: response
    ApplicationFormModel.prototype.getAllApplicationForm = function (response) {
        var query = this.model.find({});
        query.exec(function (err, formArray) {
            if (err) {
                response.send(err);
            }
            response.json(formArray);
        });
    };
    //update applicationform
    //param: response, formID, applicationForm
    ApplicationFormModel.prototype.updateApplicationForm = function (response, formId, applicationform) {
        this.model.findOneAndUpdate({ formID: formId }, applicationform, { "new": true }, function (err, form) {
            if (err) {
                response.send(err);
            }
            response.json(form);
        });
    };
    //delete applicationform
    //param: response, formID
    ApplicationFormModel.prototype.deleteApplicationForm = function (response, formId) {
        this.model.deleteOne({ formID: formId }, function (err, form) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully deleted application form!' });
        });
    };
    return ApplicationFormModel;
}());
exports.ApplicationFormModel = ApplicationFormModel;
=======
"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ApplicationFormModel = /** @class */ (function () {
    function ApplicationFormModel() {
        this.createSchema();
        this.createModel();
    }
    ApplicationFormModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            formID: {
                type: Number,
                required: true,
                unique: true
            },
            restaurantID: {
                type: Number,
                required: true,
                unique: true
            },
            userID: {
                type: Number,
                required: true,
                unique: true
            },
            status: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            }
        }, { collection: 'applicationform' });
    };
    ApplicationFormModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("applicationform", this.schema);
    };
    //create applicationform
    //param: response, applicationform
    ApplicationFormModel.prototype.createApplicationForm = function (response, applicationform) {
        this.model(applicationform).save(function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully created application form!' });
        });
    };
    //get applicationform by id
    //param: response, formID
    ApplicationFormModel.prototype.getApplicationFormByID = function (response, formId) {
        var query = this.model.findOne({ formID: formId });
        query.exec(function (err, form) {
            if (err) {
                response.send(err);
            }
            response.json(form);
        });
    };
    //get all applicationforms
    //param: response
    ApplicationFormModel.prototype.getAllApplicationForm = function (response) {
        var query = this.model.find({});
        query.exec(function (err, formArray) {
            if (err) {
                response.send(err);
            }
            response.json(formArray);
        });
    };
    //update applicationform
    //param: response, formID, applicationForm
    ApplicationFormModel.prototype.updateApplicationForm = function (response, formId, applicationform) {
        this.model.findOneAndUpdate({ formID: formId }, applicationform, { "new": true }, function (err, form) {
            if (err) {
                response.send(err);
            }
            response.json(form);
        });
    };
    //delete applicationform
    //param: response, formID
    ApplicationFormModel.prototype.deleteApplicationForm = function (response, formId) {
        this.model.deleteOne({ formID: formId }, function (err, form) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully deleted application form!' });
        });
    };
    return ApplicationFormModel;
}());
exports.ApplicationFormModel = ApplicationFormModel;
>>>>>>> 1a8e7c4dc1a81f1efeb527d16fb5184e11c632f6
