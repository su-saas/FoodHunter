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

    public static constructorFromData(id: Number, name: String, pwd: String, email: String, typ: Number){
        let newObj = {
            userID: id,
            userName: name,
            password: pwd,
            emailAddress: email,
            userType: typ,
        }
        return newObj;
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID: {
                    type: Number,
                    required: true,
                    unique : true, 
                    dropDups: true
                },
                userName: {
                    type: String,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                },
                emailAddress: {
                    type: String,
                    required: true
                },
                userType: {
                    type: Number,
                    required: true
                },
            }, {collection: 'user'}
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("user", this.schema);
    }
    public createUser(user: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model(user).save(function (err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    public deleteUserByID(id: Number): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.deleteOne({userID: id}, function(err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    public updateUser(user: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate({userID: user.userID}, user, { new: true } , function (err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }
    public getUserByID(id: Number): any{
        var deferred = Q.defer();
        var query = this.model.find({userID: id});
        var user = null;
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

    public getAllUsers(): IUserModel[] {
        var deferred = Q.defer();
        var query = this.model.find({});
        var users :IUserModel[];
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length > 0){
                users = res;
            }
            else{
                console.log('no result');
            }
            deferred.resolve(users);
        });
        return deferred.promise;
    }
}
export {UserModel};