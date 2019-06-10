"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var TagModel = /** @class */ (function () {
    function TagModel() {
        this.createSchema();
        this.createModel();
    }
    TagModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            tagID: Number,
            tagName: String
        }, { collection: "tag" });
    };
    TagModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("tag", this.schema);
    };
    TagModel.prototype.createTag = function (response, tag) {
        this.model(tag).save(function (err, newTag) {
            if (err) {
                response.send(err);
            }
            response.json(newTag);
        });
    };
    TagModel.prototype.getAllTags = function (response) {
        var query = this.model.find({});
        query.exec(function (err, tagList) {
            if (err) {
                response.send(err);
            }
            response.json(tagList);
        });
    };
    TagModel.prototype.getTagByTagID = function (response, tagId) {
        var query = this.model.findOne({ tagID: tagId });
        query.exec(function (err, tag) {
            if (err) {
                response.send(err);
            }
            response.json(tag);
        });
    };
    TagModel.prototype.updateTagByTagID = function (response, tagId, tagBody) {
        this.model.findOneAndUpdate({ tagID: tagId }, tagBody, { "new": true }, function (err, newTag) {
            if (err) {
                response.send(err);
            }
            response.json(newTag);
        });
    };
    TagModel.prototype.deleteTagByTagID = function (response, tagId) {
        this.model.remove({ tagID: tagId }, function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: "Successfully deleted " + tagId });
        });
    };
    return TagModel;
}());
exports.TagModel = TagModel;
