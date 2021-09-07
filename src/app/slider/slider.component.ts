import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  title="Slider Component";

  previousButton(){
    this.route.navigate(['/slidetogglepage']);
  }
  nextButton(){
    this.route.navigate(['/snackbarpage']);
  }

}
