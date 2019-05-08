import Mongoose = require("mongoose");

interface IRestaurantTagListModel extends Mongoose.Document {
    restaurantID: number; 
    rtaglistID: number; 
    rtagList: number[];
}
export {IRestaurantTagListModel};