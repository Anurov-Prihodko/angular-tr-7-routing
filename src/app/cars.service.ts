import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
    },
    {
      name: 'Audi',
      id: 2,
    },
    {
      name: 'Tesla',
      id: 3,
    },
    {
      name: 'Ferrari',
      id: 4,
    },
  ];

  constructor() {}
}
