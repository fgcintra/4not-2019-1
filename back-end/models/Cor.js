const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      nome: {
         type: String,
         required: true
      }
   });

   
   return mongoose.model('Cor', schema, 'cores');

}