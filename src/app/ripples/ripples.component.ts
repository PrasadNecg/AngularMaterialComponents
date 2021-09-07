import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  centered = false;
  disabled = false;
  unbounded = false;

  radius!: number;
  color!: string;

  title="Ripples Component";

  previousButton(){
    this.route.navigate(['/radiobuttonpage']);
  }
  nextButton(){
    this.route.navigate(['/selectpage']);
  }

}
