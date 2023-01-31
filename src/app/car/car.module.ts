import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './service/car.service';
import { CarsListComponent } from './cars-list/cars-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarsListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CarService,
    RouterModule,
    FormsModule
  ]
})
export class CarModule { }
