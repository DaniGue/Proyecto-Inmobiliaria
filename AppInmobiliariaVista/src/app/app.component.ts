import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppInmobiliariaVista';
  EsAutenticado = false;
  nombreUsuario = "";
  emailUsuario = "";
  cedulaUsuario = "";

  ngOnInit(): void {
    this.EsAutenticado = localStorage.getItem("EsAutenticadoUsuario") == "true" ? true : false;
    this.nombreUsuario = localStorage.getItem("nombreUsuario") ?? "";
    this.emailUsuario = localStorage.getItem("emailUsuario") ?? "";
    this.cedulaUsuario = localStorage.getItem("cedulaUsuario") ?? "";
  }

  // EsUsuarioAutenticado(){
  //   try{
  //     EsAutenticado=localStorage.getItem("EsAutenticadoUsuario")=="true"?true:false;
  //     return EsAutenticado;
  //   }catch(ex){
  //     console.log(ex);
  //     throw ex;
  //   }
  // }
  cerrarSession() {
    try {
      localStorage.removeItem("EsAutenticadoUsuario");
      localStorage.removeItem("nombreUsuario");
      localStorage.removeItem("emailUsuario");
      localStorage.removeItem("cedulaUsuario");
      window.location.reload();
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  }
}
