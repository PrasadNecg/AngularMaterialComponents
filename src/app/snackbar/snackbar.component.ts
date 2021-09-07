import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,public route:Router) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  title="Snackbar Component";

  previousButton(){
    this.route.navigate(['/sliderpage']);
  }
  nextButton(){
    this.route.navigate(['/sortheaderpage']);
  }


}
