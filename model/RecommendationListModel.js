<<<<<<< HEAD
"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RecommendationListModel = /** @class */ (function () {
    function RecommendationListModel() {
        this.createSchema();
        this.createModel();
    }
    RecommendationListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            recommendationlistID: {
                type: Number,
                required: true,
                unique: true
            },
            foodietaglistID: {
                type: Number,
                required: true
            },
            restaurantList: {
                type: [Number],
                required: true
            }
        }, { collection: 'recommendationList' });
    };
    RecommendationListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("recommendationList", this.schema);
    };
    //create recommendationList
    //param: response, recommendationList
    RecommendationListModel.prototype.createRecommendationList = function (response, recommendationList) {
        this.model(recommendationList).save(function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully created recommendation list!' });
        });
    };
    //get recommendationlist by id
    //param: response, recommendationlistId
    RecommendationListModel.prototype.getrecommendationListByID = function (response, recommendationlistId) {
        var query = this.model.findOne({ recommendationlistID: recommendationlistId });
        query.exec(function (err, recommendationlist) {
            if (err) {
                response.send(err);
            }
            response.json(recommendationlist);
        });
    };
    //update recommendationlist
    //param: response, recommendationlistID, recommendationlist
    RecommendationListModel.prototype.updateRecommendationList = function (response, recommendationlistID, recommendationlist) {
        this.model.findOneAndUpdate({ recommendationlistID: recommendationlistID }, recommendationlist, { "new": true }, function (err, updatedlist) {
            if (err) {
                response.send(err);
            }
            response.json(updatedlist);
        });
    };
    //delete recommendationlist
    //param: recommendationlistID
    RecommendationListModel.prototype.deleteRecommendationList = function (response, recommendationlistID) {
        this.model.deleteOne({ recommendationlistID: recommendationlistID }, function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully deleted application form!' });
        });
    };
    //use this function to add restaurant to the list
    //return a list of restaurants
    //@todo: need to implement the logic
    RecommendationListModel.prototype.getrecommendation = function (foodietaglistID) {
        return;
    };
    return RecommendationListModel;
}());
exports.RecommendationListModel = RecommendationListModel;
=======
"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RecommendationListModel = /** @class */ (function () {
    function RecommendationListModel() {
        this.createSchema();
        this.createModel();
    }
    RecommendationListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            recommendationlistID: {
                type: Number,
                required: true,
                unique: true
            },
            foodietaglistID: {
                type: Number,
                required: true
            },
            restaurantList: {
                type: [Number],
                required: true
            }
        }, { collection: 'recommendationList' });
    };
    RecommendationListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("recommendationList", this.schema);
    };
    //create recommendationList
    //param: response, recommendationList
    RecommendationListModel.prototype.createRecommendationList = function (response, recommendationList) {
        this.model(recommendationList).save(function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully created recommendation list!' });
        });
    };
    //get recommendationlist by id
    //param: response, recommendationlistId
    RecommendationListModel.prototype.getrecommendationListByID = function (response, recommendationlistId) {
        var query = this.model.findOne({ recommendationlistID: recommendationlistId });
        query.exec(function (err, recommendationlist) {
            if (err) {
                response.send(err);
            }
            response.json(recommendationlist);
        });
    };
    //update recommendationlist
    //param: response, recommendationlistID, recommendationlist
    RecommendationListModel.prototype.updateRecommendationList = function (response, recommendationlistID, recommendationlist) {
        this.model.findOneAndUpdate({ recommendationlistID: recommendationlistID }, recommendationlist, { "new": true }, function (err, updatedlist) {
            if (err) {
                response.send(err);
            }
            response.json(updatedlist);
        });
    };
    //delete recommendationlist
    //param: recommendationlistID
    RecommendationListModel.prototype.deleteRecommendationList = function (response, recommendationlistID) {
        this.model.deleteOne({ recommendationlistID: recommendationlistID }, function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully deleted application form!' });
        });
    };
    //use this function to add restaurant to the list
    //return a list of restaurants
    //@todo: need to implement the logic
    RecommendationListModel.prototype.getrecommendation = function (foodietaglistID) {
        return;
    };
    return RecommendationListModel;
}());
exports.RecommendationListModel = RecommendationListModel;
>>>>>>> 1a8e7c4dc1a81f1efeb527d16fb5184e11c632f6
