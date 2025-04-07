import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../shared/services/car.service';
import { RouterLink } from '@angular/router';
import { FilterLayoutComponent } from '../../layouts/filter-layout/filter-layout.component';
import { interval } from 'rxjs';
import { Car } from '../../Interfaces/car';
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    FilterLayoutComponent,
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent implements OnInit {
  cars$: Car[] = [];
  searchBrand = signal<string[]>([]);
  searchModel = signal<string[]>([]);
  searchSeat = signal<string[]>([]);
  _car = signal<Car[]>([]);
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getVehicles();
  }
  cars = computed(() => {
    const searchBrand = this.searchBrand();
    const searchModel = this.searchModel();
    const searchSeat = this.searchSeat();
    return this.carService
      .cars()
      .filter((car) =>
        searchBrand.length > 0
          ? searchBrand.some((brand) => car.brand.includes(brand))
          : true
      );
  });

  handlerBrandSelected(event: string[]) {
    this.searchBrand.set(event);
  }
  handlerModelSelected(event: string[]) {
    this.searchBrand.set(event);
  }
  handlerSeatSelected(event: string[]) {
    this.searchBrand.set(event);
  }
}
