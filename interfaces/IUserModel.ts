import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userID: number;
    userName: string;
    password: string;
    emailAddress: string;
}
export {IUserModel};