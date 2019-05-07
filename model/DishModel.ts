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
                restaurantID: {
                    type: Number, 
                    unique: true, 
                },
                dishes: [{
                    dishID: {
                        type: Number, 
                        unique: true, 
                    },
                    dishName: String,
                    dishDetails: String,
                    dishPrice: Number
                }]

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

    public updateDish(response:any, filter:Object, body: any) {
        this.model.findOneAndUpdate(filter, body, { new: true }, (err, dish) => {
            if(err){
                response.send(err);
            }
            response.json(dish);
        });
    }

    public deleteDish(response:any, filter:Object) {
        this.model.remove(filter, (err, dish) => {
            if(err){
                response.send(err);
            }
            response.json({ message: 'Successfully deleted Dish!'});
        });
    }
}
export {DishModel};