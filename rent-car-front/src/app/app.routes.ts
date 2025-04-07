import { Routes } from '@angular/router';
import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { CarComponent } from './front/car/car.component';
import { CarDetailsComponent } from './front/car-details/car-details.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},   
    {path:'login', component: LoginComponent},   
    {path:'register', component: RegisterComponent},   
    {path:'car', component: CarComponent},   
    {path:'cardetails/:id', component: CarDetailsComponent},   
];
