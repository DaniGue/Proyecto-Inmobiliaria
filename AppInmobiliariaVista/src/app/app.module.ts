import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { IngresarUsuarioComponent } from './usuario/ingresar/ingresar.component';
import { RegistrarInmuebleComponent } from './inmueble/registrar/registrar.component';
import { ConsultarInmuebleComponent } from './inmueble/consultar/consultar.component';
import { ModificarInmuebleComponent } from './inmueble/modificar/modificar.component';
import { ModificarUbicacionComponent } from './ubicacion/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarUsuarioComponent,
    RegistrarInmuebleComponent,
    ConsultarInmuebleComponent,
    ModificarInmuebleComponent,
    ModificarUbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
