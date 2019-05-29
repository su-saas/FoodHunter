import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  get userID():string {
    return this.authService.userID;
  }

  set userID(value: string) {
    this.authService.userID = value; 
  }

  tryRegister(form){
    console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      console.log("register!");
      console.log(res);
      this.userID = String(res.userID); 
      this.router.navigateByUrl('/profile');
    });
  }
}
