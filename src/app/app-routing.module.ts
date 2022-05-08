import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

// описываем путь и компонент который рендерится по этому пути
const routes: Routes = [
  { path: '', component: HomePageComponent },
  // Lasy load (Ленивая загрузка)
  {
    path: 'cars',
    loadChildren: () =>
      import('./cars-page/cars.module').then((x) => x.CarsModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
