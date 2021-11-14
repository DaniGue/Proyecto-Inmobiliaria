express = require("express");
const app = new express();

require('./conexion');
var modeloInmueble = require('./inmuebles');
var modeloUsuario = require('./usuarios');



//Insertar inmueble
app.post("/insertarInmueble", (req, res) => {
    var myobj = {
        nombre: req.nombre,
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
        cedula: req.cedula,
        nombre: req.nombre,
        apellido: req.apellido,
        email: req.email,
        contrasena: req.contrasena
    };
    modeloUsuario.collection.insertOne(myobj, function (err, res) {
        if (err) {
            throw err;
        }
        console.log('1 usuario insertado');
    });
});
//consultar usuario
app.get("/consultarUsuario", (req, res) => {
   var resultado= modeloUsuario.collection.findOne({ email: req.email, contrasena: req.contrasena });
   res.send(JSON.stringify(resultado));  
});