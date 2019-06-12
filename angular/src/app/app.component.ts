import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodhunter';
  isLoggedIn = false; 

  constructor(private auth: AuthService){
    console.log("app.component.ts: " + this.isLoggedIn); 
    this.auth.getStatus().subscribe(res => {
      console.log("/status:" + res); 
      console.log("/status type:" + typeof(res));
      if(res){
        this.auth.getSession().subscribe(data => {
          if(data.userID){
            this.isLoggedIn = true; 
          }
        })
      }
    })
  }
}
