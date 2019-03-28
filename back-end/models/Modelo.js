const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      nome: {
         type: String,
         required: true
      },
      marca: {
         type: mongoose.ObjectId,
         ref: 'Marca',
         required: true
      },
      tipo: {
         type: mongoose.ObjectId,
         ref: 'Tipo',
         required: true
      }
   });

   
   return mongoose.model('Modelo', schema, 'modelos');

}