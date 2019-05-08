import Mongoose = require("mongoose");
import { DataAccess } from './../DataAccess';
import { IApplicationFormModel } from '../interfaces/IApplicationFormModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ApplicationFormModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                formId: {
                    type: Number,
                    required: true,
                    unique: true
                },
                restaurantID: {
                    type: Number,
                    required: true,
                    unique: true
                },
                userID: {
                    type: Number,
                    required: true,
                    unique: true
                },
                status: {
                    type: String,
                    required: true,
                },
                date: {
                    type: Date,
                    required: true,

                },
            }, { collection: 'applicationform' }
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IApplicationFormModel>("applicationform", this.schema);
    }

    //create applicationform
    //param: response, applicationform
    public createApplicationForm(response: any, applicationform: any){
        this.model(applicationform).save(function (err) {
            if (err) {
                console.error(err);
                response.send(err);
            } else {
                response.json({ message: 'Successfully created application form!' });
            }
        });
    }

    //get applicationform by id
    //param: response, formID
    public getApplicationFormByID(response:any, formId: Number) {
        var query = this.model.findOne({ formId: formId });
        query.exec((err, form) => {
            response.json(form);
        });
    }

    //get all applicationforms
    //param: response
    public getAllApplicationForm(response:any): any {
        var query = this.model.find({});
        query.exec((err, formArray) => {
            response.json(formArray);
        });
    }

    //update applicationform
    //param: response, formID, applicationForm
    public updateApplicationForm(response:any, formId: Number, applicationform: any){
        this.model.findOneAndUpdate({ formId: formId }, applicationform, { new: true }, function (err, form) {
            if (err) {
                console.error(err);
                response.send(err);
            } else {
                response.json(form)
            }
        });
    }

    //delete applicationform
    //param: response, formID
    public deleteApplicationForm(response: any, formId: Number) {
        this.model.deleteOne({ formId: formId }, function (err, form) {
            if (err) {
                console.error(err);
                response.send(err);
            } else {
                response.json({ message: 'Successfully deleted application form!' });
            }
        });
    }
}
export { ApplicationFormModel };