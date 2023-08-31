import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  seleccion = "Hola";
  color_boton_property = "background-color: blue; color: white;";
  mensaje = "";
  estado_checkbox: boolean = true;
  color_property = "#000000;";
  
  lanzar_mensaje(){
    /*this.mensaje = 'Hola a mundo';
    alert(this.mensaje);*/
    if(this.color_boton_property == "background-color: blue; color: white;"){

      this.color_boton_property = "background-color: red; color: white;";
    }else{
      this.color_boton_property = "background-color: blue; color: white;";
    }

  }

  agregar_nombre(value:String){
    
  }

}
