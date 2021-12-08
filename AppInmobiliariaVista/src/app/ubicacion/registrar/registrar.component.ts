import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

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
    return this.service.registrarUbicacion(this.ubicacion);
  }

}
