import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IUserModel} from '../interfaces/IUserModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

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

    public retrieveAllUsers(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {UserModel};