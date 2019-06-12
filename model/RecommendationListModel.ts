import Mongoose = require("mongoose");
import { DataAccess } from './../DataAccess';
import { IRecommendationListModel } from '../interfaces/IRecommendationListModel';

let mongooseConnection = DataAccess.mongooseConnection;

class RecommendationListModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                recommendationlistID: {
                    type: Number,
                    required: true,
                    unique: true
                },
                foodietaglistID: {
                    type: Number,
                    required: true,
                },
                restaurantList: {
                    type: [Number],
                    required: true,
                }
            }, { collection: 'recommendationList' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecommendationListModel>("recommendationList", this.schema);
    }

    //create recommendationList
    //param: response, recommendationList
    public createRecommendationList(response: any, recommendationList: any) {
        this.model(recommendationList).save((err: any) => {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully created recommendation list!' });

        });
    }

    //get recommendationlist by id
    //param: response, recommendationlistId
    public getrecommendationListByID(response: any, recommendationlistId: number) {
        var query = this.model.findOne({ recommendationlistID: recommendationlistId });
        query.exec((err, recommendationlist) => {
            if (err) {
                response.send(err);
            }
            response.json(recommendationlist);
        });
    }

    //get recommendationlist by taglistid
    //param: response, taglistId
    public getrecommendationListByTagListID(response: any, taglistId: number) {
        var query = this.model.findOne({ foodietaglistID: taglistId });
        query.exec((err, recommendationlist) => {
            if (err) {
                response.send(err);
            }
            response.json(recommendationlist);
        });
    }

    //update recommendationlist
    //param: response, recommendationlistID, recommendationlist
    public updateRecommendationList(response: any, recommendationlistID: number, recommendationlist: any) {
        this.model.findOneAndUpdate({ recommendationlistID: recommendationlistID }, recommendationlist, { new: true }, (err, updatedlist) => {
            if (err) {
                response.send(err);
            }
            response.json(updatedlist);

        });
    }

    public updateRecommendationListByTagListID(response: any, taglistID: number, recommendationlist: any) {
        console.log('foodie tag id:', taglistID);
        console.log('new list in model:', recommendationlist);
        this.model.findOneAndUpdate({ foodietaglistID: taglistID }, recommendationlist, { new: true }, (err, updatedlist) => {
            if (err) {
                response.send(err);
            }
            response.json(updatedlist);
            console.log('the updatedList in model:', updatedlist);
        });
    }

    //delete recommendationlist
    //param: recommendationlistID
    public deleteRecommendationList(response: any, recommendationlistID: number) {
        this.model.deleteOne({ recommendationlistID: recommendationlistID }, (err) => {
            if (err) {
                response.send(err);
            }
            response.json({ message: 'Successfully deleted application form!' });

        });
    }


    //use this function to add restaurant to the list
    //return a list of restaurants
    //@todo: need to implement the logic
    public getrecommendation(foodietaglistID: number): any {
        return
    }
}
export { RecommendationListModel };