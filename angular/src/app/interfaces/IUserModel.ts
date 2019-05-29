import * as Mongoose from "mongoose";

interface IUserModel extends Mongoose.Document {
    userID: number;
    userName: string;
    password: string;
    emailAddress: string;
    userType: number;
}
export {IUserModel};