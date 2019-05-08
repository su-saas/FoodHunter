import Mongoose = require("mongoose");

interface IRestaurantTagListModel extends Mongoose.Document {
    restaurantID: number; 
    rtaglist : [{
        tagID: number; 
    }]
}
export {IRestaurantTagListModel};