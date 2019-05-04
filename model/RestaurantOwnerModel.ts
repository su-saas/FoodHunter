import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRestaurantOwnerModel} from '../interfaces/IRestaurantOwnerModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RestaurantOwnerModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
            }, {collection: 'restaurantowner'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantOwnerModel>("RestaurantOwner", this.schema);
    }

    public retrieveAll(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {RestaurantOwnerModel};