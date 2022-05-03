import { Injectable } from '@angular/core';

export interface Cars {
  name: string;
  id: number;
  year: number;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars: Cars[] = [
    {
      name: 'Ford',
      id: 1,
      year: 2020,
      color: 'orange',
    },
    {
      name: 'Audi',
      id: 2,
      year: 2015,
      color: 'white',
    },
    {
      name: 'Tesla',
      id: 3,
      year: 2022,
      color: 'black',
    },
    {
      name: 'Ferrari',
      id: 4,
      year: 2000,
      color: 'red',
    },
  ];

  constructor() {}
}
