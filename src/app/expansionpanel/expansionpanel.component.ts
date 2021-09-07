import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expansionpanel',
  templateUrl: './expansionpanel.component.html',
  styleUrls: ['./expansionpanel.component.scss']
})
export class ExpansionpanelComponent implements OnInit {

  

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
 
   title="Expansion Panel Component";

  previousButton(){
    this.route.navigate(['/dividerpage']);
  }
  nextButton(){
    this.route.navigate(['/formfieldpage']);
  }

}
