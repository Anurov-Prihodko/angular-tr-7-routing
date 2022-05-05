import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css'],
})
export class CarPageComponent implements OnInit {
  carId: number | undefined;
  model: string | undefined;
  year: number | undefined;
  color: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.carId = +params['id'];
      this.model = params['model'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    });
  }
}
