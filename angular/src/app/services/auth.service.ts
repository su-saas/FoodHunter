import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from  'rxjs';
import { map } from 'rxjs/operators';
import { IUserModel } from '../interfaces/IUserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host: string = '';

  constructor(private http: HttpClient) { }
  getSession(): Observable<IUserModel> {
    return this.http.get<IUserModel>("/auth/user");
  }
}
