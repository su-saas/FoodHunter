import { IUserModel } from "./IUserModel";

interface IFoodieModel extends IUserModel {
    reviewList: [{
        reviewID: number;
        restaurantID: number;
        reviewTitle: string;
        reviewContent: string;
        date: Date;
    }];
}
export {IFoodieModel};