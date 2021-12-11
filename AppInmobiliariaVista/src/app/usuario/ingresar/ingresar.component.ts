import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarUsuarioComponent implements OnInit {
  usuario: any;

  constructor(private usuario_Service: UsuarioService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  autenticarUsuario(){
    try{
      let email = (document.getElementById("email") as HTMLInputElement).value;
      let contrasena = (document.getElementById("contrasena") as HTMLInputElement).value;

      this.usuario = {
        email : email,
        contrasena : contrasena
      };
      return this.usuario_Service.consultarUsuario(this.usuario).subscribe((data: any) => {
        if (data.resultado) {
          console.log(data);
          swal.fire({
            title: "El usuario ha sido autenticado correctamente",
            text: "Serás redireccionado a la pantalla principal!",
            icon: "success",
            allowOutsideClick: false
          }).then(() => {
            //Asignar datos de usuario a localstorage
            localStorage.setItem('EsAutenticadoUsuario', "true");
            localStorage.setItem('nombreUsuario', data.datos.nombre+" "+data.datos.apellido);
            localStorage.setItem('emailUsuario', data.datos.email);
            localStorage.setItem('cedulaUsuario', data.datos.cedula);
            //Recargar el sitio
            window.location.href = '../';
          });
        } else {
          swal.fire({
            title: "El usuario no pudo autetizarce",
            text: "Serás redireccionado a la pantalla principal!",
            icon: "warning",
            allowOutsideClick: false
          }).then(() => {
            window.location.href = '../';
          });
        }
      })
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }
  reloadCurrentPage() {
    window.location.reload();
  }
}
