import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  crearUsuario() {
    try {
      console.log("entra a crear el usuario");
    } catch (ex) {
      console.error(ex);
    }
  }
}
