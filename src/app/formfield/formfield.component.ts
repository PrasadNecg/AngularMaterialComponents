import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.scss']
})
export class FormfieldComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  title="FormField Component";

  previousButton(){
    this.route.navigate(['/expansionpanelpage']);
  }
  nextButton(){
    this.route.navigate(['/gridlistpage']);
  }

}
