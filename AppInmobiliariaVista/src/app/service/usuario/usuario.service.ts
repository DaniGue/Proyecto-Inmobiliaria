import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    //Registrar ubicacion
    registrarUsuario(usuario: any) {
        //obtenemos los datos desde el typescript y se los enviamos al backend
        this.http.put<any>("http://localhost:5000/registrarUsuario", usuario).subscribe(data => {
            return data;
        })
    }
    consultarUsuario(usuario: any) {
        this.http.put<any>("http://localhost:5000/consultarUsuario", usuario).subscribe(data => {
            return data;
        })
    }
    consultarUsuario(usuario: any) {
        this.http.put<any>("http://localhost:5000/consultarUsuario", usuario).subscribe(data => {
            return data;
        })
    }    
        
    }
}
