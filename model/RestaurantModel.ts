import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRestaurantModel} from '../interfaces/IRestaurantModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RestaurantModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                userID: String,
                restaurantName: {
                    type: String,
                    require: true
                },
                address:{
                    type: String,
                    require: true
                },
                phoneNum: {
                    type: String,
                    require: true
                },
                introductionContent: String,
                hours: {
                    type: String,
                    require: true
                },
                disklist: [{
                    diskID: String
                }]
            }, {collection: 'Restaurants'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantModel>("Restaurant", this.schema);
    }
    
    public retrieveRestaurantDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

}
export {RestaurantModel};