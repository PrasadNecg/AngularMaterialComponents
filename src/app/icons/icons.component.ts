import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Icons Component";

  previousButton(){
    this.route.navigate(['/gridlistpage']);
  }
  nextButton(){
    this.route.navigate(['/inputspage']);
  }

}
