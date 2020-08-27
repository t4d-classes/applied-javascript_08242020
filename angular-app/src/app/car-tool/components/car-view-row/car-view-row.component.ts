import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'tr.app-car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent implements OnInit {

  @Input() // props, value immutable
  car: Car;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
