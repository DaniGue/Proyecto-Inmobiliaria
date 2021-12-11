import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Registrar ubicacion
  registrarUsuario(usuario: any) {
    //obtenemos los datos desde el typescript y se los enviamos al backend
    return this.http.post<any>("http://localhost:5000/insertarUsuario", usuario);
  }
  consultarUsuario(usuario: any) {
    let params = new HttpParams();
    if (usuario.email) {
      params = params.append('email', usuario.email);
    }
    if (usuario.contrasena) {
      params = params.append('contrasena', usuario.contrasena);
    }

    return this.http.get("http://localhost:5000/consultarUsuario", {params});
  }
}
