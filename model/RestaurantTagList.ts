import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRestaurantTagListModel} from '../interfaces/IRestaurantTagListModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class RestaurantTagListModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
            }, {collection: 'restauranttaglist'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantTagListModel>("RestaurantTagList", this.schema);
    }

    public retrieveAll(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    
    public retrieveDishDetails(response:any, filter:Object) {
        var query = this.model.find({"restauranttaglistID": filter});
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {RestaurantTagListModel};