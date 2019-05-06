import * as express from "express";
import { Router } from "express-serve-static-core";
import { TagModel } from "../model/TagModel";

// creates and configures an ExpressJS web server.
class TagRoute {

    public Tag: TagModel;

    // run configuration methods on the Express instance.
    constructor() {
        this.Tag = new TagModel();
    }

    public registerRoutes(router: express.Router): void {
        this.routes(router);
    }

    // configure API endpoints.
    private routes(router: Router): void {
        // create Tag
        router.post("/tag", (req, res) => {
            console.log(req.body);
            var tag: any = req.body;
            this.Tag.createTag(res, tag);
        });

        // get all tags
        router.get("/tag", (req, res) => {
            console.log("get all tags");
            this.Tag.getAllTags(res);
        });

        // get tag by id
        router.get("/tag/:tagID", (req, res) => {
            var tagId: number = req.params.tagID;
            console.log("get tag by tagID:", tagId);
            this.Tag.getTagByTagID(res, tagId);
        });

        // update tag by tagId
        router.put("/tag/:tagID", (req, res) => {
            var tagId: number = req.params.tagID;
            var tagBody: any = req.body;
            console.log("update tag by tagID:", tagId);
            this.Tag.updateTagByTagID(res, tagId, tagBody);
        });

        // delete tag by tagId
        router.delete("/tag/:tagID", (req, res) => {
            var tagId: number = req.params.tagID;
            console.log("delete tag by tagID:", tagId);
            this.Tag.deleteTagByTagID(res, tagId);
        });
    }
}
export {TagRoute};