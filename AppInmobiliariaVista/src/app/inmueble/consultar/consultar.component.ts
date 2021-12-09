import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { InmuebleService } from 'src/app/service/inmueble/inmueble.service';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarInmuebleComponent implements OnInit{
  inmueble: any;
  listaInmuebles: any;
  listaUbicaciones: any;
  constructor(private inmueble_Service: InmuebleService, private ubicacion_Service: UbicacionService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.inmueble_Service.consultarInmuebles({}).subscribe((data: any) => {
      this.listaInmuebles = data.datos;
      console.log(data);
    });
    this.consultarUbicacionesTodas();
  }

  consultarInmueblesFiltro() {
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
    this.inmueble_Service.consultarInmuebles(this.inmueble).subscribe((data: any) => {
      this.listaInmuebles = data.datos;
      console.log(data);
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
