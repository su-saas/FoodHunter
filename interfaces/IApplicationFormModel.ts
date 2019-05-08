import Mongoose = require("mongoose");

interface IApplicationFormModel extends Mongoose.Document {
    formId: Number,
    restaurantID: Number,
    userID: Number,
    status: String,
    date: Date,
}
export { IApplicationFormModel }