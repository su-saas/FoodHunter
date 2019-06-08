import {IRestaurantTagListModel} from '../interfaces/IRestaurantTagListModel';

interface RTagListV2 {
    key: number;
    val: number[];
}

function ConvertRestaurantLsit(v1: IRestaurantTagListModel[]): RTagListV2[] {
    let v2: RTagListV2[] = new Array();
    for(let i = 0; i < v1.length; i ++){
        let eleV2: RTagListV2 = {
            key: v1[i].restaurantID,
            val: v1[i].rtagList
        };
        v2.push(eleV2);
    }
    return v2;
}