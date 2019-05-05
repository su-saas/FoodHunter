import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import { IFavoriteListModel } from "../interfaces/IFavoriteListModel";

var mongooseConnection = DataAccess.mongooseConnection;
var Q = require('q');

class FavoriteListModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public static constructorFromData(favoriteListID: Number, userID: Number, restaurantIDList: Number[]){
        let newObj = {
            favoriteListID: favoriteListID,
            userID: userID,
            restaurantIDList: restaurantIDList
        }
        return newObj;
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                favoriteListID: {
                    type: Number,
                    required: true,
                    unique : true, 
                    dropDups: true
                },
                userID: {
                    type: Number,
                    required: true
                },
                restaurantIDList: {
                    type: [Number],
                    required: true
                },
            }, {collection: 'favoriteList'}
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IFavoriteListModel>("favoriteList", this.schema);
    }
    public createFavoriteList(favoriteList: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model(favoriteList).save(function (err){
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

    public deleteFavoriteListByID(favoriteListID: Number): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.deleteOne({favoriteListID: favoriteListID}, function(err){
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

    public updateFavoriteList(favoriteListID: Number, favoriteList: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate({favoriteListID: favoriteListID}, favoriteList, { new: true } , function (err){
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
    public getFavoriteListByID(favoriteListID: Number): any{
        var deferred = Q.defer();
        var query = this.model.find({favoriteListID: favoriteListID});
        var favoriteList = null;
        query.exec((err, favoriteLists) => {
            if(err){
                console.error(err);
            }
            else if(favoriteLists.length > 1){
                console.error('Duplicate error in FavoriteList');
            }
            else if(favoriteLists.length == 1){
                for (let u of favoriteLists){
                    favoriteList = u;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(favoriteList);
        });
        return deferred.promise;
    }

    public getAllFavoriteLists(): any {
        var deferred = Q.defer();
        var query = this.model.find({});
        var favoriteLists = null;
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length > 0){
                favoriteLists = res;
            }
            else{
                console.log('no result');
            }
            deferred.resolve(favoriteLists);
        });
        return deferred.promise;
    }
}
export {FavoriteListModel};