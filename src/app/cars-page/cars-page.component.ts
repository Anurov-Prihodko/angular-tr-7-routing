import { Component, OnInit } from '@angular/core';
import { Cars, CarsService } from '../cars.service';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css'],
})
export class CarsPageComponent implements OnInit {
  cars: Cars[] | undefined;

  constructor(
    private carsServise: CarsService
  ) // private authServise: AuthService
  {}

  ngOnInit(): void {
    // this.authServise.isAuth().subscribe(console.log);
    this.cars = this.carsServise.cars;
  }
}
