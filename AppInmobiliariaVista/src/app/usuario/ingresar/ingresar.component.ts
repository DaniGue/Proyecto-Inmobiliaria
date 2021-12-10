import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarUsuarioComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  autenticarUsuario(){
    try{

    }catch(ex){
      console.error(ex);
    }
  }
}
