import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  constructor(public route:Router) { }

  title="Badge Component";

  ngOnInit(): void {
  }
  
  previousButton(){
    this.route.navigate(['/autocompletepage']);
  }
  nextButton(){
    this.route.navigate(['/bottomsheetpage']);
  }

}
