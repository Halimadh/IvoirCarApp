import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../Interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}
  cars$ = signal<Car[]>([]);

  url_API = 'https://localhost:5001/api/';

  getVehicles() {
    this.http
      .get<Car[]>(this.url_API + 'Vehicle/GetAllVehicles')
      .subscribe((data) => {
        this.cars$.set(data);
      });
  }
  getVehicleById(id: number): Observable<any> {
    return this.http
      .get(this.url_API + 'Vehicle/GetVehicleById?id=' + id.toString())
      .pipe();
  }
  cars = this.cars$.asReadonly();
}
