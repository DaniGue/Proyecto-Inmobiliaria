import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  autenticarUsuario(){
    try{

    }catch(ex){
      console.error(ex);
    }
  }
}
