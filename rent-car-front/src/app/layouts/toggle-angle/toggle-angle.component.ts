import { Component, inject, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-toggle-angle',
  standalone: true,
  imports: [],
  templateUrl: './toggle-angle.component.html',
  styleUrl: './toggle-angle.component.css',
})
export class ToggleAngleComponent {
  nameBar = input<string>();
  toggleDiplay = output<boolean>();
  hide = signal(false);
  toggleShowHide() {
    this.hide.set(!this.hide());
    this.toggleDiplay.emit(this.hide());
  }
}
