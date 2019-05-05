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

    private checkUserProperty(user: any): boolean{
        if(("userID" in user) == false){
            //console.log(1);
            return false;
        }
        if(("userName" in user) == false){
            //console.log(2);
            return false;
        }
        if(("password" in user) == false){
            //console.log(3);
            return false;
        }
        if(("emailAddress" in user) == false){
            //console.log(4);
            return false;
        }
        if(("userType" in user) == false){
            //console.log(5);
            return false;
        }
        return true;
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
    public createUser(user: any): boolean {
        if(!this.checkUserProperty(user)){
            console.error("Something of the user you want to create is missing");
            return;
        }
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

    public updateUser(user: any): boolean {
        console.log('in updateUser:', user);
        if(!this.checkUserProperty(user)){
            console.error("Something of the user you want to update is missing");
            return;
        }

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