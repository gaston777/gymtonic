var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Images = new Schema({
    kind: {
        type: String,
        enum: ['miniatura', 'mini'],
        required: true
    },
    url: { type: String, required: true }
});

var Rutinas = new Schema({
  id:    { type: String, require: true },
  images:    [Images],
  tipo:    { type: String, 
              enum:  ['Semanal', 'Mensual', 'Trimestral', 'Semestral', 'Anual'],
              require: true 
            },
  tiempo:     { type: Number, 
              enum: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
              require: true 
            },
  estado :   { type: Number, enum: [0, 1], require: true },
  descripcion:  { type: String },
  actualizado: { type: Date, default: Date.now }    
});

Rutinas.path('model').validate(function (v) {
    return ((v != "") && (v != null));
});

module.exports = mongoose.model('Rutinas', Rutinas);