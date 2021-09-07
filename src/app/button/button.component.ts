import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Buttons Component";

  previousButton(){
    this.route.navigate(['/bottomsheetpage']);
  }
  nextButton(){
    this.route.navigate(['/buttontogglepage']);
  }

}
