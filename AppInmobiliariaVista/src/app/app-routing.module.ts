import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarUsuarioComponent } from './usuario/ingresar/ingresar.component';
import { RegistrarUsuarioComponent } from './usuario/registrar/registrar.component';
import { RegistrarUbicacionComponent } from './ubicacion/registrar/registrar.component';

const routes: Routes = [{
  path:"",
  component:RouterModule
},
{
path:"usuario/ingresar",
component:IngresarUsuarioComponent
},
{
  path:"usuario/registrar",
  component:RegistrarUsuarioComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
