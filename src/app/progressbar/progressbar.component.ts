import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  title="Progressbar Component";

  previousButton(){
    this.route.navigate(['/paginatorpage']);
  }
  nextButton(){
    this.route.navigate(['/progress_spinnerpage']);
  }

}
