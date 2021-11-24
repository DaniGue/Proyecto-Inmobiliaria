var mongoose = require('mongoose');

const UbicacionesSchema = mongoose.Schema({
    departamento: {type: String},
    ciudad: {type: String},
    ubicacion: {type: String}
});

module.exports = mongoose.model('Ubicaciones', UbicacionesSchema);