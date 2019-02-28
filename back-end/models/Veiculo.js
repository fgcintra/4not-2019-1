const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      modelo: {
         type: String,
         required: true
      },
      marca: {
         type: String,
         required: true,
      },
      ano_fabricacao: {
         type: Number,
         required: true
      },
      ano_modelo: {
         type: Number,
         required: true
      },
      cor: {
         type: String,
         required: true
      },
      combustivel: {
         type: String,
         required: true
      },
      tipo: {
         type: String,
         required: true
      },
      placa: {
         type: String,
         required: true,
         // Não é possível cadastrar mais de um
         // veículo com a mesma placa
         index: {
            unique: true
         }
      },
      importado: {
         type: Boolean,
         required: true
      },
      valor_compra: {
         type: Number,
         required: true
      },
      data_compra: {
         type: Date,
         required: true
      },
      valor_venda: {
         type: Number
      },
      data_venda: {
         type: Date
      }

   });

   return mongoose.model('Veiculo', schema, 'veiculos');

}