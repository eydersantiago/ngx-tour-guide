import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ApendiceId = 'A' | 'B' | 'C' | 'D';

@Component({
  selector: 'app-apendice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apendice.component.html',
  styleUrl: './apendice.component.scss',
})
export class ApendiceComponent {
  // todos cerrados al inicio para ahorrar espacio
  openStates: Record<ApendiceId, boolean> = {
    A: false,
    B: false,
    C: false,
    D: false,
  };

  toggle(section: ApendiceId): void {
    this.openStates[section] = !this.openStates[section];
  }

  isOpen(section: ApendiceId): boolean {
    return this.openStates[section];
  }
}
