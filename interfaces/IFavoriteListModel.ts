import Mongoose = require("mongoose");

interface IFavoriteListModel extends Mongoose.Document {
    userId: string;
    restaurantIDList: string[];
}
export {IFavoriteListModel};