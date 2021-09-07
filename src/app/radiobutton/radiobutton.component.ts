import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  title="Radio Button Component";

  previousButton(){
    this.route.navigate(['/progress_spinnerpage']);
  }
  nextButton(){
    this.route.navigate(['/ripplespage']);
  }

}
