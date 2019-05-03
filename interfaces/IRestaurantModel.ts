import Mongoose = require("mongoose");

interface IRestaurantModel extends Mongoose.Document {
    restaurantID: string; 
    oweneruserID: string;
    restaurantName: string; 
    address:string;
    phoneNum: string;
    introductionContent: string;
    hours: string;
    disklist: [{
        diskID: string; 
    }]
}
export {IRestaurantModel};
