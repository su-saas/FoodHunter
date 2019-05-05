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
                tagListID: Number,
                userID: Number,
                tagList: [{
                tagID: Number,
                }],
            }, {collection: "foodieTagList"}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IFoodieTagListModel>("foodieTagList", this.schema);
    }

    public createTagList(response:any, payload: any): any {
        var find: boolean = this.model.find(payload.userID);
        if (find) {
            response.send("You have already have a tag list!");
        } else {
            this.model.save(payload, (err: any, newTagList: any) => {
                if(err) {
                    response.send(err);
                }
                response.json(newTagList);
            });
        }
    }

    public getTagListByFoodieID(response:any, userId: number): any {
        var query: any = this.model.findOne(userId);
        query.exec( (err: any, list: any) => {
            response.json(list);
        });
    }

    public updateTagListByFoodieID(response:any, userId: number, tagList: any): any {
        this.model.findOneAndUpdate(userId, tagList, { new: true }, (err: any, newTagList: any) => {
            if(err) {
                response.send(err);
            }
            response.json(newTagList);
        });
    }

    public deleteTagListByAdminByFoodieID(response:any, adminId: number, foodieId: number): any {
        this.model.remove(adminId, foodieId, (err: any) => {
            if(err) {
                response.send(err);
            }
            response.json({ message: "Successfully deleted " + foodieId + "'s tagList!"});
        });
    }
}
export {FoodieTagListModel};