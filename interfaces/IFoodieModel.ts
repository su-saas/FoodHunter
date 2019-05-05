import { IUserModel } from "./IUserModel";

interface IFoodieModel extends IUserModel {
    reviewList: [{
        reviewID: number;
        restaurantID: number;
    }];
}
export {IFoodieModel};