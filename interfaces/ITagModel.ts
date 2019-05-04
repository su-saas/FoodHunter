import Mongoose = require("mongoose");

interface ITagModel extends Mongoose.Document {
    tagID: number;
    tagName: string;
}
export {ITagModel};