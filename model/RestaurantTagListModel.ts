import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IRestaurantTagListModel} from '../interfaces/IRestaurantTagListModel';
var Q = require('q');
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
                restaurantID: {
                    type: Number, 
                    unique: true, 
                },
                rtaglist : [{
                    tagID: {
                        type: Number, 
                        unique: true, 
                    },
                }]
            }, {collection: 'rtaglist'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRestaurantTagListModel>("RestaurantTagList", this.schema);
    }

    public createrTagList(rTagList: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model(rTagList).save(function (err){
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

    public retrieveAll(): IRestaurantTagListModel[] {
        var deferred = Q.defer();
        var query = this.model.find({});
        var rTagLists :IRestaurantTagListModel[];
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length > 0){
                rTagLists = res;
            }
            else{
                console.log('no result');
            }
            deferred.resolve(rTagLists);
        });
        return deferred.promise;
    }
    
    public retrieverTagListDetails(filter:Object): any {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var rTagList = null;
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length == 1){
                for (let r of res){
                    rTagList = r;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(rTagList);
        });
        return deferred.promise;
    }

    public updaterTagList(filter:Object, body: any): boolean { 
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

    public deleterTagList(filter:Object): boolean {
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
export {RestaurantTagListModel};