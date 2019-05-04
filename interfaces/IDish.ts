import Mongoose = require("mongoose");

interface IDishModel extends Mongoose.Document {
    restaurantID: string; 
    dishName: string; 
    dishDetails: string; 
    dishPrice: number; 
}
export {IDishModel};
