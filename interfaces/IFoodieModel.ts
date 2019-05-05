import { IUserModel } from "./IUserModel";

interface IFoodieModel extends IUserModel {
    reviewList: [{
        reviewID: number;
    }];
}
export {IFoodieModel};