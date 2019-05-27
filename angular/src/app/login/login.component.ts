import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router)
     { }

  ngOnInit() {
  }

  tryLogin(form){
    console.log(form.value);
    this.authService.signIn(form.value).subscribe((res)=>{
      console.log("Logged in!");
    });
    this.router.navigateByUrl('/restaurants/1');
  }

}
