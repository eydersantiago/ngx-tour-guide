import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portada',             // 👈 etiqueta que usarás en el HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent {

    // 🔹 Fecha para mostrar en portada
    today = new Date();

}
