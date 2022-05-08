import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page.component';

const carsRoures = [
  {
    path: '',
    component: CarsPageComponent,
    children: [{ path: ':id/:model', component: CarPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(carsRoures)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
