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
  hash!: string | null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.carId = +this.route.snapshot.params['id'];
    // this.model = this.route.snapshot.params['model'];
    // this.year = this.route.snapshot.queryParams['year'];
    // this.color = this.route.snapshot.queryParams['color'];
    // this.hash = this.route.snapshot.fragment;

    // Реактивный подход через Observable
    this.route.params.subscribe((params: Params) => {
      this.carId = +params['id'];
      this.model = params['model'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    });

    this.route.fragment.subscribe((params: any) => {
      this.hash = params;
    });
  }

  openMazdaPage() {
    this.router.navigate(['/cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 1985,
      },
      fragment: 'pug',
    });
  }
}
