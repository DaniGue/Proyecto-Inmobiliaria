import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UbicacionService } from 'src/app/service/ubicacion/ubicacion.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarUbicacionComponent implements OnInit{
  ubicacion: any;
  listaUbicaciones: any;
  constructor(private ubicacion_Service: UbicacionService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.ubicacion_Service.consultarUbicacion({}).subscribe((data: any) => {
      this.listaUbicaciones = data.datos;
      console.log(data);
    });
  
  }

  consultarUbicacionFiltro() {
    let ciudad = (document.getElementById("ciudad") as HTMLInputElement).value;
    let departamento = (document.getElementById("departamento") as HTMLInputElement).value;
  
    //tomo los datos y se los envío al servicio
    this.ubicacion = {
      ciudad: ciudad,
      departamento: departamento,
    };
    this.ubicacion_Service.consultarUbicacion(this.ubicacion).subscribe((data: any) => {
      this.listaUbicaciones = data.datos;
      console.log(data);
    })
  }
  
  reloadCurrentPage() {
    window.location.reload();
  }
}
