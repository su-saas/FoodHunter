import Mongoose = require("mongoose");

interface IFoodieTagListModel extends Mongoose.Document {
    ID: number;
    userID: number;
    tagList: [{
        ID: number;
        name: string;
    }];
}
export {IFoodieTagListModel};