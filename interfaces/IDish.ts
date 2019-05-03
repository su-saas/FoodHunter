import Mongoose = require("mongoose");

interface IDishModel extends Mongoose.Document {
    dishID: string; 
    restaurantID: string; 
    dishName: string; 
    dishDetails: string; 
    dishPrice: number; 
}
export {IDishModel};
