var mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    cedula: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    email: { type: String },
    contrasena: { type: String },
});

module.exports = mongoose.model("usuarios", usuarioSchema);
