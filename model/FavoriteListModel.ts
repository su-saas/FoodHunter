import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import { IFavoriteListModel } from "../interfaces/IFavoriteListModel";

var mongooseConnection = DataAccess.mongooseConnection;

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
    public createFavoriteList(favoriteList, response: any) {
        var res = false;
        this.model(favoriteList).save( (err) => {
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            response.json(favoriteList.favoriteListID);
        });
    }

    public deleteFavoriteListByID(favoriteListID: Number, response: any) {
        var res = false;
        this.model.deleteOne({favoriteListID: favoriteListID}, (err) => {
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            response.json(res);
        });
    }

    public updateFavoriteList(favoriteListID: Number, favoriteList, response: any) {
        var res = false;
        this.model.findOneAndUpdate({favoriteListID: favoriteListID}, favoriteList, { new: true } , (err) => {
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            response.json(res);
        });
    }
    public getFavoriteListByID(userID: Number, response: any){
        var query = this.model.find({userID: userID});
        query.exec((err, favoriteLists) => {
            if(err){
                console.error(err);
            }
            response.json(favoriteLists);
        });
    }

    public getAllFavoriteLists(response: any) {
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
            response.json(favoriteLists);
        });
    }
}
export {FavoriteListModel};