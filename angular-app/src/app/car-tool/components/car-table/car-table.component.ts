import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input() // props, value is immutable
  cars: Car[] = [];

  @Input() // props, value is immutable
  editCarId = -1;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
