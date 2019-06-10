import { IUserModel } from "./IUserModel";

interface IFoodieModel extends IUserModel {
    tagListID: number;
    favoriteListID: number;
    avatar: string;
}
export {IFoodieModel};