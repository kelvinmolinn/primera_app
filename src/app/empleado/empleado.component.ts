import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
nombre = 'Juan';
apellido = 'Perez';
edad:number = 15;
empresa = 'otra';
sector = 'otro';
jefe = 'otros';
habilitar_input_property = false;
usuario_registrado_property = true;
texto_registro="no hay nadie";
getEdad(){
  return this.edad;
}

set_empresa(empresa: string){

}
cambiar_registro(){
  this.usuario_registrado_property =! this.usuario_registrado_property;
}
set_usuario_registrado(){
  alert('el usuario se ha registrado');
  this.texto_registro = 'el usuario se acaba de registrar';
}
}
