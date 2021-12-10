import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private http: HttpClient) { }


  //Registrar inmuebles
  registrarInmuebles(inmueble: any) {
    return this.http.post<any>("http://localhost:5000/insertarInmueble", inmueble);
  }

  //Modificar inmuebles
  modificarInmuebles(inmueble: any) {
    return this.http.put<any>("http://localhost:5000/modificarInmueble", inmueble).subscribe(data => {
      return data;
    })
  }

  //Consultar inmuebles
  consultarInmuebles(inmueble: any) {
    let params = new HttpParams();
    if (inmueble.nombre) {
      params = params.append('nombre', inmueble.nombre);
    }
    if (inmueble.tipo) {
      params = params.append('tipo', inmueble.tipo);
    }
    if (inmueble.ubicacion) {
      params = params.append('ubicacion', inmueble.ubicacion);
    }
    if (inmueble.precio) {
      params = params.append('precio', inmueble.precio);
    }
    return this.http.get("http://localhost:5000/consultarInmueble", { params });
    //this.http.get("http://localhost:5000/consultarInmueble");
  }

  //Guardar Imagen
  guardarImagenInmueble(formData:any){
    try{
      let headers=new HttpHeaders();
      headers.set('enctype', 'multipart/form-data');
      return this.http.post("http://localhost:5000/guardarImagenInmueble",formData,{headers:headers});
    }catch(ex){
      console.error(ex);
      throw ex;
    }
  }
}
