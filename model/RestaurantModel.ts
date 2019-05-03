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
                restaurantID: String,
                oweneruserID: String,
                restaurantName: String,
                address:String,
                phoneNum: String,
                introductionContent: String,
                hours: String,
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

    public retrieveRestaurantsCount(response:any, filter:Object) {
        var query = this.model.find(filter).select('Restaurants').count();
        query.exec( (err, numberOfRestaurants) => {
            console.log('number of Restaurants: ' + numberOfRestaurants);
            response.json(numberOfRestaurants);
        });
    }

}
export {RestaurantModel};