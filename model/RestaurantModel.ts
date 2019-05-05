import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IRestaurantModel} from '../interfaces/IRestaurantModel';
var Q = require('q');
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
                    required: true
                },
                address:{
                    type: String,
                    required: true
                },
                phoneNum: {
                    type: String,
                    required: true
                },
                introductionContent: String,
                hours: {
                    type: String,
                    required: true
                }
            }, {collection: 'restaurant'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantModel>("Restaurant", this.schema);
    }

    public createRestaurant(restaurant: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model(restaurant).save(function (err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    public retrieveAll(): IRestaurantModel[] {
        var deferred = Q.defer();
        var query = this.model.find({});
        var restaurants :IRestaurantModel[];
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length > 0){
                restaurants = res;
            }
            else{
                console.log('no result');
            }
            deferred.resolve(restaurants);
        });
        return deferred.promise;
    }
    
    public retrieveRestaurantDetails(filter:Object): any {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var restaurant = null;
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length == 1){
                for (let r of res){
                    restaurant = r;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    }

    public updateRestaurant(filter:Object, body: any): boolean { 
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate(filter, body, { new: true } , function (err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    public deleteRestaurant(filter:Object): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.remove(filter, function(err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    //combine getByRestaurantName and getBykeyWord 
    public getByKeyword(filter:Object): any{
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var restaurant = null;
        query.exec((err, restaurants) => {
            if(err){
                console.error(err);
            }
            else if(restaurants.length > 1){
                console.error('error in find restaurant');
            }
            else if(restaurants.length == 1){
                for (let r of restaurants){
                    restaurant = r;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    }

    /*public rankByPrice(response:any) {}*/
    
}
export {RestaurantModel};
