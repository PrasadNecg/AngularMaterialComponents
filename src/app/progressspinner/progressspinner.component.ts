import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progressspinner',
  templateUrl: './progressspinner.component.html',
  styleUrls: ['./progressspinner.component.scss']
})
export class ProgressspinnerComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Progress Spinner Component";

  previousButton(){
    this.route.navigate(['/progressbarpage']);
  }
  nextButton(){
    this.route.navigate(['/radiobuttonpage']);
  }

}
