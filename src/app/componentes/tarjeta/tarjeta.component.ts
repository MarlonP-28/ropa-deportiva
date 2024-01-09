import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  showPopupFlag = false;

  showPopup(): void {
    this.showPopupFlag = true;
    
  }
  
  navigateToSpecificPage(): void {

    const rutaEspecifica = '/#/catalogo';
    window.location.href = rutaEspecifica;
  }

}
