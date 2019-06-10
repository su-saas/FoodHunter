import Mongoose = require("mongoose");

interface IRestaurantModel extends Mongoose.Document {
    userID: number;
    restaurantID: number; 
    restaurantName: string; 
    address:string;
    phoneNum: string;
    introductionContent: string;
    hours: string;
    restaurantAvtar: string;
}
export {IRestaurantModel};
