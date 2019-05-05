import Mongoose = require("mongoose");

interface IFoodieTagListModel extends Mongoose.Document {
    tagListID: number;
    userID: number;
    tagList: [{
        tagID: number;
    }];
}
export {IFoodieTagListModel};