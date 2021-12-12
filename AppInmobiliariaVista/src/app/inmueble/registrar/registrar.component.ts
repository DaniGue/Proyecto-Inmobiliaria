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
  archivos: any;
  constructor(private inmueble_Service: InmuebleService, private ubicacion_Service: UbicacionService, private http: HttpClient) {
    this.inmueble = ""
  }

  ngOnInit(): void {
    this.consultarUbicacionesTodas();
  }
  registrarInmuebles() {
    let formData = new FormData((document.getElementById("frmRegistrarInmueble") as HTMLFormElement));
    //formData.append("files", this.archivos[0]);
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
    return this.inmueble_Service.registrarInmuebles(formData).subscribe((data: any) => {
      //console.log("Respuesta de registro de inmueble:");
      //console.log(data);
      if (data.resultado) {
        swal.fire({
          title: "El inmueble ha sido registrado correctamente",
          text: "Serás redireccionado a la pantalla principal!",
          icon: "success",
          allowOutsideClick: false
        }).then(() => {
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

  imageToCanvas(ev: any) {
    try {
      console.log(ev);
      if(ev.target.files) {
        let file = ev.target.files[0]; //get first file
        var reader  = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function (e:any) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function(ev) {
            var canvas = ((document.getElementById('canvas')) as HTMLCanvasElement);
            canvas.width = (image.height/image.width)*300;
            canvas.height = (image.height/image.width)*300;
            var ctx = canvas.getContext('2d')as CanvasRenderingContext2D;
            ctx.drawImage(image,0,0,((image.height/image.width)*300),((image.height/image.width)*300));
          }
        }
     }
    } catch (ex) {
      console.error(ex);
    }
  }

  setFile(event: any) {

  }
  guardarImagen() {
    let formData = new FormData();
    formData.append("files", this.archivos[0]);
    this.inmueble_Service.guardarImagenInmueble(formData).subscribe(data => {

    });
  }
}
