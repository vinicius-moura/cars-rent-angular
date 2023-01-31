import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsFormComponent } from './car/cars-form/cars-form.component';
import { CarsListComponent } from './car/cars-list/cars-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars/list',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    redirectTo: 'cars/list'
  },
  {
    path: 'cars/list',
    component: CarsListComponent
  },
  {
    path: 'cars/new',
    component: CarsFormComponent
  },
  {
    path: 'cars/update/:id',
    component: CarsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
