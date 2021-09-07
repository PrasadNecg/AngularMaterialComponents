import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  title="List Component";

  previousButton(){
    this.route.navigate(['/inputspage']);
  }
  nextButton(){
    this.route.navigate(['/menupage']);
  }

}
