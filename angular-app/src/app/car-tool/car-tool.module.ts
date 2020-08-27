import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarHomeComponent } from './components/car-home/car-home.component';

@NgModule({
  declarations: [CarHomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  exports: [ CarHomeComponent ],
})
export class CarToolModule { }
