import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';

// описываем путь и компонент который рендерится по этому пути
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cars', component: CarsPageComponent },
  { path: 'cars/:id/:model', component: CarPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
