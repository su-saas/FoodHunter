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
                userID: Number,
                restaurantID: Number, 
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
                }
            }, {collection: 'restaurant'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantModel>("Restaurant", this.schema);
    }

    public retrieveAll(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    
    public retrieveRestaurantDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public updateRestaurant(response:any, filter:Object, filter2:Object, filter3:Object, filter4:Object, filter5:Object, filter6:Object) {
        var query = this.model.findOneAndUpdate({restaurantID: {$gte: filter}}, {$set: {restaurantName:filter2, address: filter3, 
            phoneNum: filter4, introductionContent: filter5, hours: filter6}});
        query.exec ( function (err, results) { console.log('updated doc'); } );
    }
}
export {RestaurantModel};