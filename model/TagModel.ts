import Mongoose = require("mongoose");
import {DataAccess} from "./../DataAccess";
import { ITagModel } from "../interfaces/ITagModel";

let mongooseConnection: Mongoose.Connection = DataAccess.mongooseConnection;
let mongooseObj: any = DataAccess.mongooseInstance;

class TagModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                tagID: Number,
                tagName: String,
            }, {collection: "tag"}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITagModel>("tag", this.schema);
    }

    public createTag(response:any, tag: any): any {
        this.model(tag).save((err: any, newTag: any) => {
            if(err) {
                response.send(err);
            }
            response.json(newTag);
        });
    }

    public getAllTags(response:any): any {
        var query: any = this.model.find({});
        query.exec( (err: any, tagList: any) => {
            if(err) {
                response.send(err);
            }
            response.json(tagList);
        });
    }

    public getTagByTagID(response:any, tagId: number): any {
        var query: any = this.model.findOne({tagID: tagId});
        query.exec( (err: any, tag: any) => {
            if(err) {
                response.send(err);
            }
            response.json(tag);
        });
    }

    public updateTagByTagID(response:any, tagId: number, tagBody: any): any {
        this.model.findOneAndUpdate({tagID: tagId}, tagBody, { new: true }, (err: any, newTag: any) => {
            if(err) {
                response.send(err);
            }
            response.json(newTag);
        });
    }

    public deleteTagByTagID(response:any, tagId: number): any {
        this.model.remove({tagID: tagId}, (err: any) => {
            if(err) {
                response.send(err);
            }
            response.json({ message: "Successfully deleted " + tagId});
        });
    }
}
export {TagModel};