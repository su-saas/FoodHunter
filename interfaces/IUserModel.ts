import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    name: string;
    password: string;
    emailAddress: string;
    loginStatus: string;
}
export {IUserModel};