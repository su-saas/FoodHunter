import Mongoose = require("mongoose");

interface IFoodieTagListModel extends Mongoose.Document {
    tagListID: number;
    userID: number;
    tagList: number[];
}
export {IFoodieTagListModel};