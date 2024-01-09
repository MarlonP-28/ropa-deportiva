import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private productoSeleccionado = new BehaviorSubject<any>(null);
  productoActual = this.productoSeleccionado.asObservable();

  constructor() {}

  setProducto(producto: any) {
    this.productoSeleccionado.next(producto);
  }
}