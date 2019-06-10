import { IRestaurantTagListModel } from '../interfaces/IRestaurantTagListModel';
import { async } from 'q';

interface RTagListV2 {
    key: number;
    val: number[];
}

export function ConvertRestaurantLsit(v1: IRestaurantTagListModel[]): RTagListV2[] {
    let v2: RTagListV2[] = new Array();
    for (let i = 0; i < v1.length; i++) {
        let eleV2: RTagListV2 = {
            key: v1[i].restaurantID,
            val: v1[i].rtagList
        };
        v2.push(eleV2);
    }
    return v2;
}

export async function Sleep(ms){
    await _sleep(ms);
}

function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}