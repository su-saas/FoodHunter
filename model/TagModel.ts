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

    public createTag(response:any, tag: any): void {
        var find: boolean = this.model.find(tag);
        if (find) {
            response.send("Tag has already existed!");
        } else {
            this.model.save(tag, (err: any, newTag: any) => {
                if(err) {
                    response.send(err);
                }
                response.json(newTag);
            });
        }
    }

    public getAllTags(response:any): any {
        var query: any = this.model.find({});
        query.exec( (err: any, tagList: any) => {
            response.json(tagList);
        });
    }

    public getTagByTagID(response:any, tagId: number): any {
        var query: any = this.model.findOne(tagId);
        query.exec( (err: any, tag: any) => {
            response.json(tag);
        });
    }

    public updateTagByTagID(response:any, tagId: number): any {
        this.model.findOneAndUpdate(tagId, { new: true }, (err: any, newTag: any) => {
            if(err) {
                response.send(err);
            }
            response.json(newTag);
        });
    }

    public deleteTagByAdminByTagID(response:any, adminId: number, tagId: number): any {
        this.model.remove(adminId, tagId, (err: any) => {
            if(err) {
                response.send(err);
            }
            response.json({ message: "Successfully deleted " + tagId + "'s tagList!"});
        });
    }
}
export {TagModel};