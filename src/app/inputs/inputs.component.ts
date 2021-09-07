import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Input Component";

  previousButton(){
    this.route.navigate(['/iconspage']);
  }
  nextButton(){
    this.route.navigate(['/listpage']);
  }

}
