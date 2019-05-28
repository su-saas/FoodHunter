import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  list: any;
  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.getTags().subscribe(
      res => this.list = res
    );
  }

}
