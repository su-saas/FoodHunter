import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
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
                restaurantID: Number,
                rtaglist : [{
                    tagID: Number
                }]
            }, {collection: 'rtaglist'}
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
    
    public retrieverTagListDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

    public updateTagList(response:any, filter:Object, body: any) {
        this.model.findOneAndUpdate(filter, body, { new: true }, (err, tagList) => {
            if(err){
                response.send(err);
            }
            response.json(tagList);
        });
    }

    public deleteTagList(response:any, filter:Object) {
        this.model.remove(filter, (err, tagList) => {
            if(err){
                response.send(err);
            }
            response.json({ message: 'Successfully deleted restaurant tagList!'});
        });
    }
}
export {RestaurantTagListModel};