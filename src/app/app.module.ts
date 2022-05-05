import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CarsModule } from './cars-page/cars.module';
import { ColorDirective } from './shared/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ColorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, CarsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
