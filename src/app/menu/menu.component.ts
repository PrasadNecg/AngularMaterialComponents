import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Menu Component";

  previousButton(){
    this.route.navigate(['/listpage']);
  }
  nextButton(){
    this.route.navigate(['/paginatorpage']);
  }

}
