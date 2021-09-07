import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  title="Divider Component";

  previousButton(){
    this.route.navigate(['/dialogpage']);
  }
  nextButton(){
    this.route.navigate(['/expansionpanelpage']);
  }

}
