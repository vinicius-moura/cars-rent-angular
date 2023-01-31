import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/shared/models/car.model';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars : Car [] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.listAll();
  }

  listAll(): Car[] {
    return this.carService.listAll();
  }

  delete($event: any, car: Car): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o carro ${car.name}?`)){
      this.carService.delete(car.id!);
      this.cars = this.listAll();
    }
  }

}
