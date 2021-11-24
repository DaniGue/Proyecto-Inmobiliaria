express = require("express");
const { createReadStream } = require("fs");

const app = new express();
const HTML_CONTENT_TYPE = "text/html";
//const router = new express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Conecta a base de datos mongodb
require("./conexion");
//Crea los modelos a utilizar para las operaciones crud
var modeloInmueble = require("./Modelos/inmuebles");
var modeloUsuario = require("./Modelos/usuarios");

const path = require("path");
let fs = require("fs");
const multer = require("multer");
const { monitorEventLoopDelay } = require("perf_hooks");
let objMulter = multer({ dest: "./public/upload" });
// Instantiate multer, el objeto de parámetro pasado, dest representa la ruta de almacenamiento del archivo cargado
app.use(objMulter.any());

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": HTML_CONTENT_TYPE });

    createReadStream("./Vistas/HTML/Login.html").pipe(res);
    //res.end("hola mundo");
    //res.redirect('./Vistas/HTML/Login');
});

//#region  Operaciones CRUD

//#region INMUEBLE
app.post("/insertarInmueble", (req, res) => {
    var inmueble = new modeloInmueble({
        nombre: req.body.nombre,
        tipo: "defecto",
        imagen: "defecto",
        ubicacion: "Bogota",
    });
    inmueble.save(function (err, datos) {
        if (err) {
            console.error(err);
            throw err;
        }
        res.redirect("/");
    });
    // modeloInmueble.collection.insertOne(myobj, function (err, res) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('1 inmueble insertado');
    // });
});
//#endregion INMUEBLE
//#region USUARIO
app.post("/insertarUsuario", (req, res) => {
    var usuario = new modeloUsuario({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contrasena: req.body.contrasena,
    });
    usuario.save(function (err, datos) {
        if (err) {
            console.error(err);
            throw err;
        }
        res.redirect("./Vistas/HTML/Login");
    });
});
//consultar usuario
app.post("/consultarUsuario", (req, res) => {
    modeloUsuario.findOne({ email: req.body.email, contrasena: req.body.contrasena }, function (err, datos) {
        if (err) {
            console.error(err);
            throw err;
        } else {
            if (datos) {
                res.send(datos);
            } else {
                res.send("Usuario no encontrado");
            }
        }
    });
});
//#endregion USUARIO

//#endregion  Operaciones CRUD

//Agregar las rutas de las operaciones crud al servidor
//app.use(router);
//Iniciar el servidor en el puerto designado
app.listen(5000, () => {
    console.log("aplicacion corriendo en el puerto 5000");
});
