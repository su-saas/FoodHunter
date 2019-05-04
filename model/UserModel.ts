import Mongoose = require("mongoose");
import {DataAccess} from "../DataAccess";
import {IUserModel} from "../interfaces/IUserModel";

var mongooseConnection = DataAccess.mongooseConnection;

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
    public createUser(user, response: any) {
        var res = false;
        this.model(user).save( (err) => {
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            response.json(user.userID);
        });
    }

    public deleteUserByID(id: Number, response: any) {
        var res = false;
        this.model.deleteOne({userID: id}, (err) => {
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            response.json(res);
        });
    }

    public updateUser(userID: Number, user, response: any) {
        var res = false;
        this.model.findOneAndUpdate({userID: userID}, user, { new: true } , (err) => {
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            response.json(res);
        });   
    }
    public getUserByID(id: Number, response: any) {
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
            response.json(user);
        });
    }

    public getAllUsers(response: any){
        var query = this.model.find({});
        var users = null;
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
            response.json(users);
        });
    }
}
export {UserModel};