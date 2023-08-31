import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  templateUrl: './propiedad.component.html',
  styleUrls: ['./propiedad.component.css']
})
export class PropiedadComponent {
  color_div = "background-color: blue; ";

  lanzar_mensaje(){

    if(this.color_div == "background-color: blue; "){

      this.color_div = "background-color: red; ";
    }else{
      this.color_div = "background-color: blue; ";
    }

  }

}
