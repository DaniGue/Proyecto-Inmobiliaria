import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }

     //Registrar ubicacion
     registrarUbicacion(ubicacion: any) {
    this.http.put<any>("http://localhost:5000/insertarUbicacion", ubicacion).subscribe(data => {
      return data;
     })
     }
    //Modificar ubicacion
    modificarUbicacion(ubicacion: any) {
      this.http.put<any>("http://localhost:5000/modificarUbicacion", ubicacion).subscribe(data => {
        return data;
      })
    }
    //Consultar ubicacion
    consultarUbicacion(ubicacion: any):any {
      // this.http.get<any>("http://localhost:5000/consultarUbicacion", ubicacion).subscribe(data => {
      //   return data;
      // })
      let params = new HttpParams();
    if (ubicacion.departamento) {
      params = params.append('departamento', ubicacion.departamento);
    }
    if (ubicacion.ciudad) {
      params = params.append('ciudad', ubicacion.ciudad);
    }
      return this.http.get("http://localhost:5000/consultarUbicaciones",{params});
    }
}
