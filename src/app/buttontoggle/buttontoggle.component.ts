import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttontoggle',
  templateUrl: './buttontoggle.component.html',
  styleUrls: ['./buttontoggle.component.scss']
})
export class ButtontoggleComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Buttons Toggle Component";

  previousButton(){
    this.route.navigate(['/buttonpage']);
  }
  nextButton(){
    this.route.navigate(['/cardpage']);
  }

}
