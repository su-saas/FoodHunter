import * as Mongoose  from "mongoose";
import {DataAccess} from "../DataAccess";
import {IUserModel} from "../interfaces/IUserModel";
import { IFoodieModel } from "../interfaces/IFoodieModel";

let mongooseConnection: Mongoose.Connection = DataAccess.mongooseConnection;
let mongooseObj: any = DataAccess.mongooseInstance;

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
    }
    // the abstract method which should be implemented in derived classes
    abstract createSchema(): void;
    abstract createModel(): void;

    // create user by user information
    // assumption: each user can only create themselves (type check)
    public createUser(response:any, user: any): any {
        this.model(user).save((err: any, newUser: any) => {
            if(err) {
                response.send(err);
            }
            response.json(newUser);
        });
    }

    // for each user they need to provide userID and password to LOGIN
    // payload: userID
    //          password
    public logInByIDAndPassword(response:any, payload: any): any {
        if (payload.userID === 1) {
            console.error("Please sign up at first");
        } else {
            var query: any = this.model.findOne({userID: payload.userID}, {password: payload.password});
            query.exec( (err: any, user: any) => {
                if(err) {
                    response.send(err);
                }
                response.json(user);
            });
        }
    }

    // todo: log out*************************************

    // for each user they need to provide their userID to GET themselves
    // for admin he needs to provide user's userID to GET user
    public getUserByID(response:any, userId: number): any {
        var query: any = this.model.findOne({userID: userId});
        query.exec( (err: any, tag: any) => {
            if(err) {
                response.send(err);
            }
            response.json(tag);
        });
    }

    public getUserByemailAddress(response:any, emailAddress: string): any {
        var query: any = this.model.findOne({emailAddress: emailAddress});
        query.exec( (err: any, tag: any) => {
            if(err) {
                response.send(err);
            }
            response.json(tag);
        });
    }

    // for each user they need to provide their userID and the updated body to UPDATE themselves
    public updateUserByID(response:any, userId: number, body: any): any {
        this.model.findOneAndUpdate({userID: userId}, body, { new: true }, (err: any, newUser: any) => {
            if(err) {
                response.send(err);
            }
            response.json(newUser);
        });
    }

    // for each user they need to provide their userID to DELETE themselves
    // for admin he needs to provide user's userID to DELETE user
    public deleteUserByID(response: any, userId: number): any {
        this.model.remove({userID: userId}, (err: any) => {
            if(err) {
                response.send(err);
            }
            response.json({ message: "Successfully deleted " + userId});
        });
    }
}

class FoodieModel extends UserModel {

    // the constructor of the model
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
                    dropDups: true,
                },
                userName: {
                    type: String,
                    required: true,
                },
                password: {
                    type: String,
                    required: true,
                },
                emailAddress: {
                    type: String,
                    required: true,
                },
                userType: {
                    type: Number,
                    required: true,
                },
                tagListID: {
                    type: Number,
                },
                favoriteListID: {
                    type: Number,
                },
                avatar: {
                    type: String,
                },
            }, {collection: "user"}
        );
        this.schema.index({userID: 1}, {password: null}, {emailAddress: null},
             {unique: true});
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IFoodieModel>("foodie", this.schema);
    }
}
export {FoodieModel};

class RestaurantOwnerModel extends UserModel {

    // the constructor of the model
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
                    dropDups: true,
                },
                userName: {
                    type: String,
                    required: true,
                },
                password: {
                    type: String,
                    required: true,
                },
                emailAddress: {
                    type: String,
                    required: true,
                },
                userType: {
                    type: Number,
                    required: true,
                },
            }, {collection: "user"}
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("rOwner", this.schema);
    }
}
export {RestaurantOwnerModel};

class AdminModel extends UserModel{

    // the constructor of the model
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
                    dropDups: true,
                },
                userName: {
                    type: String,
                    required: true,
                },
                password: {
                    type: String,
                    required: true,
                },
                emailAddress: {
                    type: String,
                    required: true,
                },
                userType: {
                    type: Number,
                    required: true,
                },
            }, {collection: "user"}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IUserModel>("admin", this.schema);
    }

    public getAllUsers(response:any): any {
        var query: any = this.model.find({});
        query.exec( (err: any, userList: any) => {
            response.json(userList);
        });
    }

    public getAllFoodies(response:any, foodieType: number): any {
        var query: any = this.model.find({userType: 1});
        query.exec( (err: any, foodieList: IFoodieModel[]) => {
            response.json(foodieList);
        });
    }

    public getAllRestaurantOwners(response:any): any {
       var query: any = this.model.find({userType: 2});
            query.exec( (err: any, ownerList: IUserModel[]) => {
                response.json(ownerList);
        });
    }
    public getAllAdmins(response:any): any {
        var query: any = this.model.find({userType: 3});
        query.exec( (err: any, adminList: IUserModel[]) => {
            response.json(adminList);
        });
    }
}
export {AdminModel};