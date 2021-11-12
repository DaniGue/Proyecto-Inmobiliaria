express = require("express");
const app = new express();

require('./conexion');
var modeloInmueble = require('./inmuebles');
var modeloUsuario = require('./usuarios');



//Insertar inmueble
app.post("/insertarInmueble", (req, res) => {
    var myobj = {
        nombre: req[0].nombre,
        tipo: 'defecto',
        imagen: 'defecto',
        ubicacion: 'Bogota'
    };
    modeloInmueble.collection.insertOne(myobj, function (err, res) {
        if (err) {
            throw err;
        }
        console.log('1 inmueble insertado');
    });
});
//Insertar usuario
app.post("/insertarUsuario", (req, res) => {
    var myobj = {
        cedula: req[0].cedula,
        nombre: req[0].nombre,
        clave: req[0].clave
    };
    modeloUsuario.collection.insertOne(myobj, function (err, res) {
        if (err) {
            throw err;
        }
        console.log('1 usuario insertado');
    });
});