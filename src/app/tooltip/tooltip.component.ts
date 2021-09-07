import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']  
})
export class TooltipComponent implements OnInit {
  // encapsulation!: ViewEncapsulation.None;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  
  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  
  title="Tooltip Component";

  previousButton(){
    this.route.navigate(['/toolbarpage']);
  }
  nextButton(){
    this.route.navigate(['/treepage']);
  }

}
