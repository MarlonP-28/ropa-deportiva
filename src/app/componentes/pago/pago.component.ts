import { Component } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  mostrarTarjeta = false;
  mostrarCriptomoneda = false;

  mostrarComponente(componente: string): void {
    this.mostrarTarjeta = componente === 'tarjeta';
    this.mostrarCriptomoneda = componente === 'criptomoneda';
  }

}
