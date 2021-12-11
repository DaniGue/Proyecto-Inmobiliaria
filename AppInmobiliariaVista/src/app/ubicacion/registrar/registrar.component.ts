import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarUbicacionComponent implements OnInit {

  ubicacion: any
  constructor(private service: UbicacionService) {
    this.ubicacion = ""
  }

  ngOnInit(): void {
  }
  registrarUbicacion() {
    let departamento = (document.getElementById("departamento") as HTMLInputElement).value;
    let ciudad = (document.getElementById("ciudad") as HTMLInputElement).value;

    //tomo los datos y se los envío al servicio
    this.ubicacion = {
      departamento: departamento,
      ciudad: ciudad,
    };
    return this.service.registrarUbicacion(this.ubicacion).subscribe((data: any) => {
      //console.log("Respuesta de registro de inmueble:");
      //console.log(data);
      if (data.resultado) {
        swal.fire({
          title: "La ubicación ha sido registrada correctamente",
          text: "Serás redireccionado a la pantalla principal!",
          icon: "success",
          allowOutsideClick: false
        }).then(() => {
          window.location.href = '../';
        });
      } else {
        swal.fire({
          title: "La ubicación no pudo registrarse",
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

}
