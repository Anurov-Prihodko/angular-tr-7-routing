import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';
import { NewPageComponent } from './new-page/new-page.component';

// описываем путь и компонент который рендерится по этому пути
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'new', component: NewPageComponent },
  {
    path: 'cars',
    component: CarsPageComponent,
    canActivate: [AuthGuard],
    children: [{ path: ':id/:model', component: CarPageComponent }],
  },
  // Обработка не корректного url
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
