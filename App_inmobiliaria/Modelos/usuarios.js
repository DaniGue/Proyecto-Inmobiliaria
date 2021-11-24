var mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    cedula: {type: String},
    nombre: {type: String},
    apellido: {type: String},
    email: {type: String},
    contrasena: {type: String}
});

module.exports = mongoose.model('Usuarios', UsuarioSchema);