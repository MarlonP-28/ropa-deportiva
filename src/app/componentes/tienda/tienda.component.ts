import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/producto_tienda'

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{
  productoSeleccionado: any;
  showPayment: boolean = false; 

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.productoActual.subscribe((producto) => {
      this.productoSeleccionado = producto;
    });
  }

  cancel(): void {
    // Aquí redireccionas a la página principal, por ejemplo:
    window.location.href = '/#/catalogo'; // Esto te lleva a la página principal
  }

  pay(): void {
    // Aquí muestras un mensaje en la consola
    this.showPayment = true; 
  }

}
