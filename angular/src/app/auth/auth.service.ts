import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from  './user';
import { JwtResponse } from  './jwt-response';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userID: string;
  AUTH_SERVER = 'http://localhost:8080';
  // AUTH_SERVER:string = "https://foodhunter.azurewebsites.net"
  authSubject  =  new  BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  /*register(user : User): Observable<JwtResponse> {
    user.userType = 1;
    return this.httpClient.post<JwtResponse>(this.AUTH_SERVER + '/foodie/', user).pipe(
      tap((res: JwtResponse ) => {
        if(res.user) {
          localStorage.set("UserID", res.user.userID);
          localStorage.set("ACCESS_TOKEN", res.user.access_token);
          localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    )
  };

  signIn(user : User): Observable<JwtResponse> {
    return this.httpClient.get<JwtResponse>(this.AUTH_SERVER + '/foodie/'+user.userID).pipe(
      tap(async(res: JwtResponse ) => {
        if(res.user) {
          localStorage.set("UserID", res.user.userID);
          localStorage.set("ACCESS_TOKEN", res.user.access_token);
          localStorage.set("EXPIRES_IN", res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    )
  };*/

  register(user: User): Observable<User> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.httpClient.post<User>(this.AUTH_SERVER + '/foodie', JSON.stringify(user), {
			headers,
		});
  }

  signIn(user: User): Observable<User> {
    return this.httpClient.get<User[]>(this.AUTH_SERVER + '/foodie/' + user.userID)
      .pipe(
        map(response => {
          let updatedResponse = null;
          for (let i = 0; i < response.length; i ++) {
            if (response[i].password === user.password) {
              updatedResponse = response[i];
            }
          }
          return updatedResponse;
        })
      );
    }

  signOut() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    this.authSubject.next(false);
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }
}
