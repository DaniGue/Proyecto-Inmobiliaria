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
        this.http.put<any>("http://localhost:5000/registrarUsuario", usuario);            
    }
    consultarUsuario(usuario: any) {
         return this.http.get("http://localhost:5000/consultarUsuario", usuario);
    }
}
