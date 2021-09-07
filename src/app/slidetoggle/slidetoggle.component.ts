import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.scss']
})
export class SlidetoggleComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  title="Slide Toggle Component";

  previousButton(){
    this.route.navigate(['/sidenavpage']);
  }
  nextButton(){
    this.route.navigate(['/sliderpage']);
  }

}
