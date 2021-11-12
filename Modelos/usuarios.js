var mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    cedula: {type: String},
    nombre: {type: String},
    clave: {type: String}
});

module.exports = mongoose.model('usuario', usuarioSchema);