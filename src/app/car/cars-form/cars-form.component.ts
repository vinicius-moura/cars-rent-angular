import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/shared/models/car.model';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.scss']
})
export class CarsFormComponent implements OnInit{
  @ViewChild('formCar') formCar! : NgForm;
  car! : Car;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    if (id){
      this.findId(id);
    } else {
      this.car = new Car(); 
    }
  }

  insertCar(): void {
    if(this.formCar.form.valid) {
      this.carService.insertCar(this.car);
      this.router.navigate(["/cars"]);
    }
  }

  findId(id: number): void {
    const res = this.carService.findById(id);
    if (res !== undefined){
      this.car = res;
    } else {
      throw new Error("Car not found: id = " + id);
    }
  }

  update(): void {
    if (this.formCar.form.valid) {
      this.carService.update(this.car);
      this.router.navigate(['/cars']);
    }
  }

}
