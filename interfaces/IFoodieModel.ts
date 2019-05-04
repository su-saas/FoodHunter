import { IUserModel } from "./IUserModel";

interface IFoodieModel extends IUserModel {
    reviewList: [{
        reviewID: number;
        restaurantID: number;
        reviewContent: string;
        date: Date;
    }];
}
export {IFoodieModel};