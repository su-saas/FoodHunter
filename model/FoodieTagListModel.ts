import Mongoose = require("mongoose");
import {DataAccess} from "./../DataAccess";
import { IFoodieTagListModel } from "../interfaces/IFoodieTagListModel";

let mongooseConnection: Mongoose.Connection = DataAccess.mongooseConnection;
let mongooseObj: any = DataAccess.mongooseInstance;


class FoodieTagListModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                tagListID: {
                    type: Number,
                    required: true,
                    unique : true,
                },
                userID: {
                    type: Number,
                    required: true,
                    unique : true,
                },
                tagList: {
                    type: [Number],
                    required: true,
                },
            }, {collection: "foodieTagList"}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IFoodieTagListModel>("foodieTagList", this.schema);
    }

    public createTagList(response: any, tagList: any): any {
        this.model(tagList).save((err: any, newTagList: any) => {
            if(err) {
                response.send(err);
            }
            else{
                response.json(newTagList);
            }
        });
    }

    public getAllTagLists(response:any): any {
        var query: any = this.model.find({});
        query.exec( (err: any, tagLists: any) => {
            if(err) {
                response.send(err);
            }
            else{
                response.json(tagLists);
            }
        });
    }

    public getTagListByFoodieID(response: any, userId: number): any {
        var query: any = this.model.findOne({userID: userId});
        query.exec( (err: any, tag: any) => {
            if(err) {
                response.send(err);
            }
            else{
                response.json(tag);
            }
        });
    }

    public updateTagListByFoodieID(response: any, userId: number, tagList: any): any {
        this.model.findOneAndUpdate({userID: userId}, tagList, { new: true }, (err: any, newTagList: any) => {
            if(err) {
                response.send(err);
            }
            else{
                response.json(newTagList);
            }
        });
    }

    public deleteTagListByFoodieID(response: any, foodieId: number): any {
        this.model.remove({userID: foodieId}, (err: any) => {
            if(err) {
                response.send(err);
            }
            else{
                response.json({ message: "Successfully deleted " + foodieId + "'s tagList"});
            }
        });
    }
}
export {FoodieTagListModel};