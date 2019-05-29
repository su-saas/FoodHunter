import { IUserModel } from "./IUserModel";

interface IFoodieModel extends IUserModel {
    reviewList: number[];
    tagListID: number;
    favoriteListID: number;
}
export {IFoodieModel};