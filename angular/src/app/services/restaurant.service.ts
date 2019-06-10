import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import {Observable,of, from } from 'rxjs';
import { Observable } from 'rxjs';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';

@Injectable({
    providedIn: 'root'
})

export class RestaurantService {

    private url = '/restaurant';
    constructor(private http: HttpClient) { }
    getAll(): Observable<IRestaurantModel[]> {
        return this.http.get<IRestaurantModel[]>(this.url);
    }

    getByID(rID: number): Observable<IRestaurantModel> {
        return this.http.get<IRestaurantModel>(this.url + '/' + rID);
    }
}
