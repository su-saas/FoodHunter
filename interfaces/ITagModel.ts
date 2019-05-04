import Mongoose = require("mongoose");

interface ITagModel extends Mongoose.Document {
    ID: number;
    name: string;
}
export {ITagModel};