import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/Car';

@Component({
  selector: 'tr.app-car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css']
})
export class CarEditRowComponent implements OnInit {

  @Input()
  car: Car;

  // state, value can be changed
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });

  }

}
