import Mongoose = require("mongoose");

interface IRestaurantTagListModel extends Mongoose.Document {
    restaurantTagListID: number, 
    restaurantID: number; 
    tagList: [{
        tagID: string; 
    }]
}
export {IRestaurantTagListModel};
