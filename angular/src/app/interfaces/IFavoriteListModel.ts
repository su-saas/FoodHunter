import * as Mongoose from "mongoose";

interface IFavoriteListModel extends Mongoose.Document {
    favoriteListID: number;
    userID: number;
    restaurantIDList: number[];
}
export {IFavoriteListModel};