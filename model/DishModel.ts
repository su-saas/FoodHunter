import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IDishModel} from '../interfaces/IDishModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class DishModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
            }, {collection: 'dish'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IDishModel>("Dish", this.schema);
    }

    public retrieveAll(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    
    public retrieveDishDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {DishModel};