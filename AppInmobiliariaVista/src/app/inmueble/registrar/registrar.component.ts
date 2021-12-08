import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/service/inmueble/inmueble.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarInmuebleComponent implements OnInit {
  inmueble: any
  constructor(private service: InmuebleService) {
    this.inmueble = ""
  }

  ngOnInit(): void {
  }
  registrarInmuebles() {
    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let tipo = (document.getElementById("tipo") as HTMLInputElement).value;
    let ubicacion = (document.getElementById("ubicacion") as HTMLInputElement).value;
    //tomo los datos y se los envío al servicio
    this.inmueble = {
      nombre: nombre,
      tipo: tipo,
      ubicacion: ubicacion
    };
    return this.service.registrarInmuebles(this.inmueble);
  }
}
