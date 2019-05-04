import Mongoose = require("mongoose");

interface IDishModel extends Mongoose.Document {
    dishID: number; 
    restaurantID: number; 
    dishName: string; 
    dishDetails: string; 
    dishPrice: number; 
}
export {IDishModel};
