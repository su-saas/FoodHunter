"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        try {
            this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING, { useNewUrlParser: true });
        }
        catch (error) {
            console.log("connect error: ", error);
        }
        return this.mongooseInstance;
    };
    // local connect
    //static DB_CONNECTION_STRING:string = "mongodb://dbAdmin:test@localhost:3000/foodhunter?authSource=admin";
    DataAccess.DB_CONNECTION_STRING = "mongodb+srv://dbAdmin:test@cluster0-hmc1e.azure.mongodb.net/foodhunter?retryWrites=true";
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
