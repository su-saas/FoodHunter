import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  options = [
    {description: 'Restaurant Name'},
    {description: 'Restaurant Address'}
  ];
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(f) {
    this.submitted = true;
    console.log(f.value);
    this.router.navigateByUrl('/recommendationList');
  }
}
