const express= require("express");
const {createReadStream} = require('fs')
var modeloUsuario= require('./usuarios')
var modeloUbicaciones= require('./ubicaciones')
var modeloInmueble= require('./inmuebles')

const app= new express();
const HTML_CONTENT_TYPE = 'text/html'


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const path = require("path");
var modeloInmuble= require('./inmuebles')

 require('./conexion')
 
 //#region USUARIO
 
app.post("/insertarUsuario", (req, res) => {
  var myobj = { 
    cedula: req.body.cedula, 
    nombre: req.body.nombre, 
    apellido: req.body.apellido,
    email: req.body.email,  
    contrasena: req.body.contrasena  };
  modeloUsuario.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;
  })
  res.send("Usuario Creado")
});
app.post("/consultarUsuario", (req, res) => {
    modeloUsuario.findOne({ email: req.body.email, contrasena: req.body.contrasena },function(err,datos){
        if (err) {
            console.error(err);
            throw err;
        }else{
            if(datos){
                res.send(datos);
            }else{
                res.send("Usuario no encontrado");
            }
            
        }
    }) 
});
//#endregion USUARIO
//#region UBICACION

//------OK----------------
app.post("/insertarUbicacion", (req, res) => {
  var myobj = { 
    departamento: req.body.departamento, 
    ciudad: req.body.ciudad,
    ubicacion: req.body.ubicacion };
  modeloUbicaciones.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;
  })
  res.send("Ubicacion Creada")  
  })  
//--------------------------

//#endregion UBICACION
//#region INMUEBLE

//------------OK-----------------------
app.post("/insertarInmueble", (req, res) => {
  modeloUbicaciones.find({ubicacion:req.body.ubicacion}, (err, docs) => {
    var myobj = { nombre:req.body.nombre , tipo:req.body.tipo, ubicacion: docs[0]._id  };
    modeloInmueble.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
  
    })
     res.send("Inmueble guardado")
    })
})
//-------------------------------------

//#endregion INMUEBLE

app.get('/', (req, res) => {
res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
createReadStream('./index.html').pipe(res)
})

app.listen(5000, () => {
console.log("aplicacion corriendo en el puerto 5000")
})