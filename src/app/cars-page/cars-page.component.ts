import { Component, OnInit } from '@angular/core';
import { Cars, CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css'],
})
export class CarsPageComponent implements OnInit {
  cars: Cars[] | undefined;

  constructor(private carsServise: CarsService) {}

  ngOnInit(): void {
    this.cars = this.carsServise.cars;
  }
}
