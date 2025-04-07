import { Component, computed, OnInit, output, signal } from '@angular/core';
import { BrandsMock, ModelsMock, SeatsMock } from '../../shared/data-mocks';
import { Brand } from '../../Interfaces/brand';
import { Model } from '../../Interfaces/model';
import { ToggleAngleComponent } from '../toggle-angle/toggle-angle.component';
import { FilterpipePipe } from '../pipe/filterpipe.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Seat } from '../../Interfaces/seat';

@Component({
  selector: 'app-filter-layout',
  standalone: true,
  imports: [
    ToggleAngleComponent,
    FilterpipePipe,
    CheckboxModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './filter-layout.component.html',
  styleUrl: './filter-layout.component.css',
})
export class FilterLayoutComponent {
  brand = signal('BRANDS');
  model = signal('MODELS');
  hide: boolean = false;
  modelshide: boolean = false;
  searchTerm = '';
  searchModel = '';
  brandsMock = signal([...BrandsMock]);
  seatsMock = signal(SeatsMock);
  selectedBrands = signal<Brand[]>([]);
  selectedModels = signal<Model[]>([]);
  selectedSeats = signal<Seat[]>([]);
  brandOutput = output<string[]>();
  modelOutput = output<string[]>();
  seatOutput = output<string[]>();
  modelsMock = computed(() =>
    ModelsMock.filter((model) =>
      this.selectedBrands().some((brand) => brand.id === model.brandId)
    )
  );
  itemsFiltered = computed(() => [
    ...this.selectedBrands().map((brand) => brand.name),
    ...this.selectedModels().map((model) => model.name),
    ...this.selectedSeats().map((seat) => seat.num),
  ]);
  updateBrandSelected(event: Brand[]) {
    this.selectedModels.update(() =>
      this.selectedModels().filter((model) =>
        this.selectedBrands().some((brand) => brand.id === model.brandId)
      )
    );
    if (event.length > 0) {
      this.brandOutput.emit(event.map((brand: Brand) => brand.name));
    }
  }
  updateModelSelected(event: Model[]) {
    if (event.length > 0) {
      this.modelOutput.emit(event.map((model: Model) => model.name));
    }
  }
  updateSeatSelected(event: Seat[]) {
    if (event.length > 0) {
      this.seatOutput.emit(event.map((seat: Seat) => seat.num));
    }
  }
  handleToggleDisplay(event: boolean) {
    this.hide = event;
  }
  handleToggleModelDisplay(event: boolean) {
    this.modelshide = event;
  }
}
