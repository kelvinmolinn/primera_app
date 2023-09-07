import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/emplados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoFeoComponent } from './empleado-feo/empleado-feo.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { PropiedadComponent } from './propiedad/propiedad.component';
import { InfoContactoComponent } from './info-contacto/info-contacto.component';
import { RutaInfoComponent } from './ruta-info/ruta-info.component';
import { ParcialComponent } from './parcial/parcial.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoFeoComponent,
    PadreComponent,
    HijoComponent,
    PropiedadComponent,
    InfoContactoComponent,
    RutaInfoComponent,
    ParcialComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
