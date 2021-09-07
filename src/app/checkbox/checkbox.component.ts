import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  toppings: FormGroup;

  constructor(public route:Router,fb: FormBuilder) { 
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    });
  }

  ngOnInit(): void {
  }


  title="Checkbox Component";

  previousButton(){
    this.route.navigate(['/cardpage']);
  }
  nextButton(){
    this.route.navigate(['/chipspage']);
  }

}
