const express = require("express");
const { createReadStream } = require('fs')
var modeloUsuario = require('./usuarios')
var modeloUbicaciones = require('./ubicaciones')
var modeloInmueble = require('./inmuebles')
var cors = require('cors');


const app = new express();
const HTML_CONTENT_TYPE = 'text/html'
app.use(cors);

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "\\public"));

const path = require("path");

require('./conexion')

//#region USUARIO

app.post("/insertarUsuario", (req, res) => {
  var myobj = {
    cedula: req.body.cedula,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    contrasena: req.body.contrasena
  };
  modeloUsuario.collection.insertOne(myobj, function (err, result) {
    if (err) {
      console.log(err);
      let resultado = { resultado: false, datos: "Fallo el registro de usuario:" + err };
      res.send(resultado);
      //throw err;
    } else {

      if (res) {
        let resultado = { resultado: true, datos: result };
        res.send(resultado);
      } else {
        let resultado = { resultado: false, datos: "Usuario no pudo ser registrado" };
        res.send(resultado);
      }

    }
  })
  //res.send("Usuario Creado")
});
app.get("/consultarUsuario", (req, res) => {
  modeloUsuario.findOne({ email: req.body.email, contrasena: req.body.contrasena }, function (err, datos) {
    if (err) {
      console.error(err);
      let resultado = { resultado: false, datos: err };
      res.send(resultado);
      //throw ex;
    } else {

      if (datos) {
        let resultado = { resultado: true, datos: datos };
        res.send(resultado);
      } else {
        let resultado = { resultado: false, datos: "Usuario no encontrado" };
        res.send(resultado);
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
    ciudad: req.body.ciudad
  };
  modeloUbicaciones.collection.insertOne(myobj, function (err, result) {
    if (err) {
      console.error(err);
      let resultado = { resultado: false, datos: err };
      res.send(resultado);
      //throw err;
    } else {
      if (result) {
        let resultado = { resultado: true, datos: result };
        res.send(resultado);
      } else {
        let resultado = { resultado: false, datos: "Ubicación no pudo ser registrado" };
        res.send(resultado);
      }
    }
  })
  //res.send("Ubicacion Creada")
})
app.get("/consultarUbicaciones", (req, res) => {
    modeloUbicaciones.find({}, function (err, datos) {
        if (err) {
            console.error(err);
            let resultado = { resultado: false, datos: err };
            res.send(resultado);
            //throw ex;
        } else {

            if (datos) {
                let resultado = { resultado: true, datos: datos };
                res.send(resultado);
            } else {
                let resultado = { resultado: false, datos: "No existen ubicaciones" };
                res.send(resultado);
            }

        }
    })
});
//--------------------------

//#endregion UBICACION
//#region INMUEBLE

//------------OK-----------------------
app.post("/insertarInmueble", (req, res) => {
  modeloUbicaciones.find({ _id: req.body.ubicacion }, (err, docs) => {
    //console.log(docs);
    var myobj = { nombre: req.body.nombre, tipo: req.body.tipo, ubicacion: docs[0]._id };
    modeloInmueble.collection.insertOne(myobj, function (err, result) {
      if (err) {
        console.error(err);
        let resultado = { resultado: false, datos: err };
        res.send(resultado);
        //throw err;
      } else {
        if (result) {
          let resultado = { resultado: true, datos: result };
          res.send(resultado);
        } else {
          let resultado = { resultado: false, datos: "Inmueble no pudo ser registrado" };
          res.send(resultado);
        }
      }

    })
    //res.send("Inmueble guardado")
  })
})
app.put("/modificarInmueble", (req, res) => {
  modeloUbicaciones.find({ _id: req.body.ubicacion }, (err, docs) => {
    //console.log(docs);
    //var myobj = { nombre: req.body.nombre, tipo: req.body.tipo, ubicacion: docs[0]._id };
    modeloInmueble.find({ _id: req.body._id }, function (err, result) {
      if (err) {
        console.error(err);
        let resultado = { resultado: false, datos: err };
        res.send(resultado);
        //throw err;
      } else {
        if (result) {
          var myobj = { _id:req.body._id, nombre: req.body.nombre, tipo: req.body.tipo, ubicacion: docs[0]._id };
          modeloInmueble.collection.updateOne(myobj, function (errUpdate, resultUpdate) {
            if (errUpdate) {
              console.error(errUpdate);
              let resultado = { resultado: false, datos: errUpdate };
              res.send(resultado);
              //throw err;
            } else {
              if (resultUpdate) {
                let resultado = { resultado: true, datos: resultUpdate };
                  res.send(resultado);
              } else {
                let resultado = { resultado: false, datos: "Inmueble no pudo ser actualizado" };
                res.send(resultado);
              }

            }
          });

        } else {
          let resultado = { resultado: false, datos: "Inmueble no pudo ser encontrado" };
          res.send(resultado);
        }
      }

    })
    //res.send("Inmueble guardado")
  })
});
app.get("/consultarInmueble", (req, res) => {
  console.log(req);
  var filtro = {};
  if (req.body.nombre) {
    filtro.nombre = req.body.email;
  }
  if (req.body.tipo) {
    filtro.tipo = tipo;
  }
  if (req.body.ubicacion) {
    filtro.ubicacion = ubicacion;
  }
  if (req.body.precio) {
    filtro.ubicacion = precio;
  }
  modeloInmueble.find(filtro, function (err, datos) {
    if (err) {
      console.error(err);
      let resultado = { resultado: false, datos: err };
      res.send(resultado);
      //throw ex;
    } else {

      if (datos) {
        let resultado = { resultado: true, datos: datos };
        res.send(resultado);
      } else {
        let resultado = { resultado: false, datos: "Inmueble no encontrado" };
        res.send(resultado);
      }

    }
  })
});
//-------------------------------------

//#endregion INMUEBLE

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  createReadStream('./index.html').pipe(res)
})

app.listen(5000, () => {
  console.log("aplicacion corriendo en el puerto 5000")
})