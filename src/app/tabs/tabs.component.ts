import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  title="Tabs Component";

  previousButton(){
    this.route.navigate(['/tablepage']);
  }
  nextButton(){
    this.route.navigate(['/toolbarpage']);
  }

}
