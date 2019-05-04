import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IUserModel} from '../interfaces/IUserModel';

var mongooseConnection = DataAccess.mongooseConnection;
//let mongooseObj = DataAccess.mongooseInstance;
var Q = require('q');

class UserModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID: Number,
                userName: String,
                password: String,
                emailAddress: String,
                userType: Number,
            }, {collection: 'user'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("user", this.schema);
    }

    public createUser(): boolean {
        this.model({userID: 100}).save(function (err){
            if(err){
                console.error(err);
                return false;
            }
        });
        return true;
    }

    public getByUserID(id: Number) :IUserModel {
        var deferred = Q.defer();
        var query = this.model.find({userID: id});
        var user :IUserModel = null;
        query.exec((err, users) => {
            if(err){
                console.error(err);
            }
            else if(users.length > 1){
                console.error('Duplicate error in User');
            }
            else if(users.length == 1){
                for (let u of users){
                    user = u;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    public retrieveAllUsers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {UserModel};