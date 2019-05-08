import Mongoose = require("mongoose");

interface IDishModel extends Mongoose.Document {
    restaurantID: number; 
    dishes: [{
        dishID: number; 
        dishName: string; 
        dishDetails: string; 
        dishPrice: number; 
    }]
}
export {IDishModel};
