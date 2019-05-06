import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IDishModel} from '../interfaces/IDishModel';
var Q = require('q');
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

    public createDish(dish: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model(dish).save(function (err){
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

    public retrieveAll(): IDishModel[] {
        var deferred = Q.defer();
        var query = this.model.find({});
        var dishs :IDishModel[];
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length > 0){
                dishs = res;
            }
            else{
                console.log('no result');
            }
            deferred.resolve(dishs);
        });
        return deferred.promise;
    }
    
    public retrieveDishDetails(filter:Object): any {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var dish = null;
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length == 1){
                for (let r of res){
                    dish = r;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(dish);
        });
        return deferred.promise;
    }

    public updateDish(filter:Object, body: any): boolean { 
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

    public deleteDish(filter:Object): boolean {
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
}
export {DishModel};