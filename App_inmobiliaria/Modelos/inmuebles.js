const { ObjectId } = require('bson');
var mongoose = require('mongoose');

const inmuebleSchema = mongoose.Schema({
    nombre: { type: String },
    tipo: { type: String },
    //imagen: { type: String },
    ubicacion: { type: mongoose.Schema.ObjectId, ref: "Ubicaciones" },
    precio:{type:String}
});

module.exports=mongoose.model('inmueble',inmuebleSchema);