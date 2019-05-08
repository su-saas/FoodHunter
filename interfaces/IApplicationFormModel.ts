<<<<<<< HEAD
import Mongoose = require("mongoose");

interface IApplicationFormModel extends Mongoose.Document {
    formID: number,
    restaurantID: number,
    userID: number,
    status: String,
 }
