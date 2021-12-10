import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  usuario: any;
  
  constructor(private usuario_Service: UsuarioService, private http: HttpClient) {
    this.usuario = ""
   }

  ngOnInit(): void {
  }
  registrarUsuario() {
    let cedula = (document.getElementById("cedula") as HTMLInputElement).value;
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let apellido = (document.getElementById("apellido") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let contrasena = (document.getElementById("contrasena") as HTMLInputElement).value;

    this.usuario = {
      cedula : cedula,
      nombre : nombre,
      apellido :apellido,
      email : email,
      contrasena : contrasena,
    };
    return this.usuario_Service.registrarUsuario(this.usuario).subscribe((data: any) => {
      if (data.resultado) {
        swal.fire({
          title: "El usuario ha sido registrado correctamente",
          text: "Serás redireccionado a la pantalla principal!",
          icon: "success",
          allowOutsideClick: false
        }).then(() => {
          window.location.href = '../';
        });
      } else {
        swal.fire({
          title: "El usuario no pudo registrarse",
          text: "Serás redireccionado a la pantalla principal!",
          icon: "warning",
          allowOutsideClick: false
        }).then(() => {
          window.location.href = '../';
        });
      }
    })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  setFile(event:any){

  }
}

