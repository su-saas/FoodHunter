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

    public updateRestaurant(response:any, filter:Object, body: any) {
        this.model.findOneAndUpdate(filter, body, { new: true }, (err, restaurant) => {
            if(err){
                response.send(err);
            }
            response.json(restaurant);
        });
    }

    public deleteRestaurant(response:any, filter:Object) {
        this.model.remove(filter, (err, restaurant) => {
            if(err){
                response.send(err);
            }
            response.json({ message: 'Successfully deleted restaurant!'});
        });
    }

    /*
    public getByRestaurantName(response:any, filter:Object) {
        this.model.find(filter, (err, restaurant) => {
            if(err){
                response.send(err);
            }
            response.json(restaurant);
        });
    }*/

    public getByKeyword(response:any, filter:Object) {
        this.model.find(filter, (err, restaurant) => {
            if(err){
                response.send(err);
            }
            response.json(restaurant);
        });
    }

    /*public rankByPrice(response:any) {}*/
    
}
export {RestaurantModel};
