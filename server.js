express = require("express");
const { createReadStream } = require('fs')


const app = new express();
const HTML_CONTENT_TYPE = 'text/html'




const path = require("path");
let fs = require('fs')
const multer = require("multer");
const { monitorEventLoopDelay } = require("perf_hooks");
let objMulter = multer({ dest: "./public/upload" });
// Instantiate multer, el objeto de parámetro pasado, dest representa la ruta de almacenamiento del archivo cargado
app.use(objMulter.any())

app.use(express.static("./public"));

// app.post("/upload", (req, res) => {
//     let oldName = req.files[0].path;// Obtener el nombre
//     // Agrega el sufijo original al nuevo nombre
//     let newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
//     fs.renameSync(oldName, newName);// Cambiar el nombre del archivo

//     res.send({
//       err: 0,
//       url:
//         "http://localhost:5000/upload/" +
//         req.files[0].filename + path.parse(req.files[0].originalname).ext // La ruta de vista previa de la imagen
//     });
//   });

app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })


    createReadStream('index.html').pipe(res)
    //res.end("hola mundo");

})


app.listen(5000, () => {

    console.log("aplicacion corriendo en el puerto 5000")

})