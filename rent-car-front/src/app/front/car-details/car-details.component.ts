import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';

import { IftaLabelModule } from 'primeng/iftalabel';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarService } from '../../shared/services/car.service';
@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    CheckboxModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DatePicker,
    IftaLabelModule,
    Select,
    RouterLink,
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent {
  value1: any;
  selectedCar: any = {};
  selectedCity: any;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  constructor(private route: ActivatedRoute, private carService: CarService) {}
  id = 0;
  ngOnInit(): void {
    // this.selectedCar = history.state.car;
    // console.log(this.selectedCar);
    this.route.params.subscribe((params) => {
      this.id = +params['id']; // + permet de convertir la chaîne en nombre
    });
    this.getVehclesById();
  }
  getVehclesById() {
    this.carService.getVehicleById(this.id).subscribe((data) => {
      this.selectedCar = data;
      console.log(this.selectedCar);
    });
  }
}
