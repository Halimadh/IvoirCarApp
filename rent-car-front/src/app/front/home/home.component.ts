import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button'; // Adjust the import path as necessary
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule,CarouselModule,TagModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  products=[
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'voiture1.jfif',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
    id: '2000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'voiture2.jfif',
    price: 60,
    category: 'Accessories',
    quantity: 10,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
  id: '2000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'voiture3.jfif',
  price: 30,
  category: 'Accessories',
  quantity: 11,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
{
  id: '2000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'suv-tt.png',
  price: 30,
  category: 'Accessories',
  quantity: 11,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
{
  id: '2000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'voiture4.jfif',
  price: 30,
  category: 'Accessories',
  quantity: 11,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
{
  id: '2000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'voiture5.jfif',
  price: 30,
  category: 'Accessories',
  quantity: 11,
  inventoryStatus: 'INSTOCK',
  rating: 5
}
  ]

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 4,
              numScroll: 1
          },
          {
              breakpoint: '1199px',
              numVisible: 3,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '575px',
              numVisible: 1,
              numScroll: 1
          }
      ]
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warn';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
              return 'info';
      }
  }
}
