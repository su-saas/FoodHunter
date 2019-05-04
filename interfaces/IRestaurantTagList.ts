import Mongoose = require("mongoose");

interface IRestaurantTagListModel extends Mongoose.Document {
    restaurantID: string; 
    tagList: [{
        tagID: string; 
    }]
}
export {IRestaurantTagListModel};
