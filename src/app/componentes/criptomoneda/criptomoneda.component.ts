import { Component } from '@angular/core';

@Component({
  selector: 'app-criptomoneda',
  templateUrl: './criptomoneda.component.html',
  styleUrls: ['./criptomoneda.component.css']
})
export class CriptomonedaComponent {
  showPopupFlag = false;

  showPopup(): void {
    this.showPopupFlag = true;
    console.log(this.showPopupFlag)
  }
  
  navigateToSpecificPage(): void {
    const rutaEspecifica = '/#/catalogo';
    window.location.href = rutaEspecifica;
  }
}
