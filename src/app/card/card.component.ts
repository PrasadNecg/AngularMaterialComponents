import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Card Component";

  previousButton(){
    this.route.navigate(['/buttontogglepage']);
  }
  nextButton(){
    this.route.navigate(['/checkboxpage']);
  }


}
