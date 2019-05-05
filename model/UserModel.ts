import Mongoose = require("mongoose");
import {DataAccess} from "../DataAccess";
import {IUserModel} from "../interfaces/IUserModel";
import { IFoodieModel } from "../interfaces/IFoodieModel";

let mongooseConnection: Mongoose.Connection = DataAccess.mongooseConnection;
let mongooseObj: any = DataAccess.mongooseInstance;
var Q: any = require("q");

abstract class UserModel {
    public schema:any;
    public model:any;

    // the constructor of the model
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
    // the abstract method which should be implemented in derived classes
    abstract createSchema(): void;
    abstract createModel(): void;

    // create user by user information
    public createUser(user: any): boolean {
        var deferred: any = Q.defer();
        var res: any = false;
        if (this.model.find(user)) {
            console.error("User already exists");
        } else {
            // this part could be implemented in controller because it doesn't need
            // to access DB
            /* if (!this.checkUserProperty(user)) {
                console.error("Some information of the user you want to create is missing");
                return;
               }*/
            this.model(user).save(function (err: any): any {
                if (err) {
                    console.error(err);
                } else {
                    res = true;
                }
                deferred.resolve(res);
            });
        }
        return deferred.promise;
    }

    // for each user they need to provide userID and password to LOGIN
    // payload: userID
    //          password
    public logInByIDAndPassword(payload: any): any {
        var deferred: any = Q.defer();
        var query: any = this.model.find(payload.userID);
        if (!query) {
            console.error("User doesn't exist!");
        } else {
            if (payload.userID === 1) {
                console.error("Please sign up at first");
            } else {
                query.exec( (err: any, user: any) => {
                    if (err) {
                        console.error(err);
                    } else {
                        deferred.resolve(user);
                    }
                });
            }
        }
        return deferred.promise;
    }

    // todo: log out*************************************

    // for each user they need to provide their userID to GET themselves
    // for admin he needs to provide user's userID to GET user
    public getUserByID(userId: Number): any {
        var deferred: any = Q.defer();
        var query: any = this.model.find({userID: userId});
        var user: any = null;
        query.exec((err: any, users: any) => {
            if(err) {
                console.error(err);
            } else if (users.length > 1) {
                console.error("Duplicate error in User");
            } else if (users.length === 1) {
                for (let u of users){
                    user = u;
                }
            } else {
                console.log("no result");
            }
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    // for each user they need to provide their userID and the updated body to UPDATE themselves
    public updateUserByID({userID, body }: {userID: number; body: any; }): any {
        var deferred: any = Q.defer();
        var res: any = false;
        this.model.findOneAndUpdate(userID, body, { new: true }, (err: any, user: any) => {
            if(err) {
                console.error(err);
            } else {
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    // for each user they need to provide their userID to DELETE themselves
    // for admin he needs to provide user's userID to DELETE user
    public deleteUserByID(userId: number): any {
        var deferred: any = Q.defer();
        var res: any = false;
        this.model.deleteOne({userID: userId}, function(err: any): any{
            if(err) {
                console.error(err);
            } else {
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    // check if the user is already in the DB or not
    // private checkUserProperty(user: any): boolean {
    //     if (!("userID" in user)) {
    //         return false;
    //     }
    //     if (!("userName" in user)) {
    //         return false;
    //     }
    //     if (!("password" in user)) {
    //         return false;
    //     }
    //     if (!("emailAddress" in user)) {
    //         return false;
    //     }
    //     if (!("userType" in user)) {
    //         return false;
    //     }
    //     return true;
    // }
}

class FoodieModel extends UserModel {

    public constructor() {
        super();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID: Number,
                userName: String,
                password: String,
                emailAddress: String,
                userType: Number,
                reviewList: [{
                    reviewID: Number,
                }],
            }, {collection: "user"}
        );
        this.schema.index({userID: 1}, {reviewList: null}, {unique: true});
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IFoodieModel>("user", this.schema);
    }

}
export {FoodieModel};

class RestaurantOwnerModel extends UserModel {

    public constructor() {
        super();
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
}
export {RestaurantOwnerModel};

class AdminModel extends UserModel {

    public constructor() {
        super();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID: Number,
                userName: String,
                password: String,
                emailAddress: String,
                userType: Number,
            }, {collection: "user"}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("user", this.schema);
    }

    public getAllUsers(): IUserModel[] {
        var deferred: any = Q.defer();
        var query: any = this.model.find({});
        var users : IUserModel[];
        query.exec((err: any, res: IUserModel[]) => {
            if(err) {
                console.error(err);
            } else if (res.length > 0) {
                users = res;
            } else {
                console.log("no result");
            }
            deferred.resolve(users);
        });
        return deferred.promise;
    }

    public getAllFoodies(foodieType: number): IFoodieModel[] {
        var deferred: any = Q.defer();
        var query: any;
        var users : IFoodieModel[];
        if (foodieType !== 1) {
            console.error("Wrong user type");
        } else {
            query = this.model.find({userType: foodieType});
            query.exec((err: any, res: IFoodieModel[]) => {
                if(err) {
                    console.error(err);
                } else if (res.length > 0) {
                    users = res;
                } else {
                    console.log("no result");
                }
                deferred.resolve(users);
            });
        }
        return deferred.promise;
    }

    public getAllRestaurantOwners(ownerType: number): IUserModel[] {
        var deferred: any = Q.defer();
        var query: any;
        var users : IUserModel[];
        if (ownerType !== 2) {
            console.error("Wrong user type");
        } else {
            query = this.model.find({userType: ownerType});
            query.exec((err: any, res: IUserModel[]) => {
                if(err) {
                    console.error(err);
                } else if (res.length > 0) {
                    users = res;
                } else {
                    console.log("no result");
                }
                deferred.resolve(users);
            });
        }
        return deferred.promise;
    }
}
export {AdminModel};