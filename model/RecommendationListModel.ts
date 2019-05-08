import Mongoose = require("mongoose");
import { DataAccess } from './../DataAccess';
import { IRecommendationListModel } from '../interfaces/IRecommendationListModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

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
                recommendationlistId: Number,
                foodietaglistId: Number,
                restaurantList: [{ restaurantID: Number }],
            }, { collection: 'recommendationList' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IRecommendationListModel>("recommendationList", this.schema);
    }

    //create recommendationList
    //param: response, recommendationList
    public createRecommendationList(response: any, recommendationList: any) {
        this.model(recommendationList).save(function (err) {
            if (err) {
                console.error(err);
                response.send(err);
            } else {
                response.json({ message: 'Successfully created recommendation list!' });
            }
        });
    }

    //get recommendationlist by id
    //param: response, recommendationlistId
    public getrecommendationListByID(response: any, recommendationlistId: Number): any {
        var query = this.model.find({ recommendationlistId: recommendationlistId });
        query.exec((err, recommendationlist) => {
            response.json(recommendationlist);
        });
    }

    //update recommendationlist
    //param: response, recommendationlistID, recommendationlist
    public updateRecommendationList(response: any, recommendationlistID: Number, recommendationlist: any){
        this.model.findOneAndUpdate({ recommendationlistID: recommendationlistID }, recommendationlist, { new: true }, function (err, updatedlist) {
            if (err) {
                console.error(err);
                response.send(err);
            } else {
                response.json(updatedlist)
            }
        });
    }

    //delete recommendationlist
    //param: recommendationlistID
    public deleteRecommendationList(response: any, recommendationlistID: Number){
        this.model.deleteOne({ recommendationlistID: recommendationlistID }, function (err) {
            if (err) {
                console.error(err);
                response.send(err);
            } else {
                response.json({ message: 'Successfully deleted application form!' });
            }
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