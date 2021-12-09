import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { InmuebleService } from 'src/app/service/inmueble/inmueble.service';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarInmuebleComponent implements OnInit {
  inmueble: any;
  listaUbicaciones: any;
  constructor(private inmueble_Service: InmuebleService, private ubicacion_Service: UbicacionService, private http: HttpClient) {
    this.inmueble = ""
  }

  ngOnInit(): void {
    this.consultarUbicacionesTodas();
  }
  registrarInmuebles() {
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let tipo = (document.getElementById("tipo") as HTMLInputElement).value;
    let ubicacion = (document.getElementById("ubicacion") as HTMLInputElement).value;
    let precio = (document.getElementById("precio") as HTMLInputElement).value;
    //tomo los datos y se los envío al servicio
    this.inmueble = {
      nombre: nombre,
      tipo: tipo,
      ubicacion: ubicacion,
      precio: precio
    };
    return this.inmueble_Service.registrarInmuebles(this.inmueble).subscribe((data: any) => {
      //console.log("Respuesta de registro de inmueble:");
      //console.log(data);
      if (data.resultado) {
        swal.fire({
          title: "El inmueble ha sido registrado correctamente",
          text: "Serás redireccionado a la pantalla principal!",
          icon: "success",
          allowOutsideClick: false
        }).then((result) => {
          window.location.href = '../';
        });
      } else {
        swal.fire({
          title: "El inmueble no pudo registrarse",
          text: "Serás redireccionado a la pantalla principal!",
          icon: "warning",
          allowOutsideClick: false
        }).then(() => {
          window.location.href = '../';
        });
      }
    })

  }
  consultarUbicacionesTodas() {
    try {
      this.ubicacion_Service.consultarUbicacion({}).subscribe((data: any) => {
        this.listaUbicaciones = data.datos;
        console.log(data);
      });

    } catch (ex) {
      console.error(ex);
    }
  }
  reloadCurrentPage() {
    window.location.reload();
  }
}
