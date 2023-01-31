import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './service/car.service';
import { CarsListComponent } from './cars-list/cars-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    CarsListComponent,
    CarsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    CarService,
    provideNgxMask()
  ]
})
export class CarModule { }
