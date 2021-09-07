import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  title="Date Picker Component";

  previousButton(){
    this.route.navigate(['/chipspage']);
  }
  nextButton(){
    this.route.navigate(['/dialogpage']);
  }

}
