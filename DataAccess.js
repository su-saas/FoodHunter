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
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING, { useNewUrlParser: true });
        return this.mongooseInstance;
    };
    // local connect
    //static DB_CONNECTION_STRING:string = "mongodb://dbAdmin:test@localhost:3000/foodhunter?authSource=admin";
    // static DB_CONNECTION_STRING:string = "mongodb+srv://dbAdmin:test@cluster0-hmc1e.azure.mongodb.net/foodhunter?retryWrites=true"
    //static DB_CONNECTION_STRING:string = "mongodb+srv://dbAdmin:test@cluster0-hmc1e.azure.mongodb.net/foodhunter?retryWrites=true&w=majority"
    //static DB_CONNECTION_STRING:string = "mongodb://dbAdmin:test@cluster0-shard-00-00-hmc1e.azure.mongodb.net:27017,cluster0-shard-00-01-hmc1e.azure.mongodb.net:27017,cluster0-shard-00-02-hmc1e.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority://dbAdmin:test@cluster0-shard-00-00-hmc1e.azure.mongodb.net:27017,cluster0-shard-00-01-hmc1e.azure.mongodb.net:27017,cluster0-shard-00-02-hmc1e.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
    DataAccess.DB_CONNECTION_STRING = "mongodb://dbAdmin:test@foodhunter-shard-00-00-wnfgr.azure.mongodb.net:27017,foodhunter-shard-00-01-wnfgr.azure.mongodb.net:27017,foodhunter-shard-00-02-wnfgr.azure.mongodb.net:27017/test?ssl=true&replicaSet=foodhunter-shard-0&authSource=admin&retryWrites=true&w=majority";
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();
