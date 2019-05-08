<<<<<<< HEAD
import Mongoose = require("mongoose");

interface IApplicationFormModel extends Mongoose.Document {
    formID: number,
    restaurantID: number,
    userID: number,
    status: String,
    date: Date,
}
=======
import Mongoose = require("mongoose");

interface IApplicationFormModel extends Mongoose.Document {
    formID: number,
    restaurantID: number,
    userID: number,
    status: String,
    date: Date,
}
>>>>>>> 1a8e7c4dc1a81f1efeb527d16fb5184e11c632f6
export { IApplicationFormModel }