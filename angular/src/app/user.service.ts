import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserModel } from './interfaces/IUserModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = 'http://localhost:8080';
  userId:string = "";

  constructor(private http: HttpClient) { }
  setUserid(uId:string) {
    this.userId = uId;
  }

  validateemailAddressInfo(emailAddress:string) : Observable<IUserModel> {
    console.log(this.host + '/login/' + emailAddress);
    return this.http.get<IUserModel>(this.host + '/login/' + emailAddress);
  }

  createNewUser(User : IUserModel): Observable<IUserModel> {
    console.log("create new user");
    return this.http.post<IUserModel>(this.host + '/foodie', JSON.stringify(User));
  }

  loginWithGoogle(): Observable<IUserModel>{
    console.log("inside user service for google login");
    return this.http.get<IUserModel>(this.host + '/auth/google');
  }

  validatecallback(): Observable<IUserModel>{
    console.log("inside user service for google callback");
    return this.http.get<IUserModel>(this.host + '/auth/google/callback');
  }
}
