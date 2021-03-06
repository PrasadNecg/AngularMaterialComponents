import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Toolbar Component";

  previousButton(){
    this.route.navigate(['/tabspage']);
  }
  nextButton(){
    this.route.navigate(['/tooltip_page']);
  }

}
