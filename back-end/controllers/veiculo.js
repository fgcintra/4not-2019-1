const Veiculo = require('../models/Veiculo')(/* construtor */);

const controller = {}; // Objeto vazio

// Toda função de controller que estiver
// ligado a um model deve ter dois parâmetros:
// req(uest) e res(ponse)
controller.novo = function(req, res) {
   // Os dados a serem gravados estão
   // dentro de req.body
   Veiculo.create(req.body).then(
      // Callback se der certo
      function() {
         //res.send(null); // Resposta sem conteúdo
         // HTTP 201: Criado
         res.sendStatus(201).end();
      },
      // Callback se der errado
      function(erro) {
         console.error(erro); // Mostra o erro no terminal
         // HTTP 500: Erro interno do servidor
         res.sendStatus(500).end();
      }
   );
}

controller.listar = function(req, res) {
   Veiculo.find()
      // populate() de dois níveis: popula 'modelo' e, dentro
      // dele, também popula 'marca'
      .populate({path: 'modelo', populate: {path: 'marca'}})
      .populate({path: 'modelo', populate: {path: 'tipo'}})
      .populate('cor')
      .populate('combustivel')
      .exec().then(
      // Callback do bem
      function(veiculos) { // TODOS os veículos em um vetor
         // Retorna o vetor encontrado
         res.json(veiculos).end();
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}

controller.obterUm = function(req, res) {
   // Capturamos o parâmetro id da requisição
   const id = req.params.id;

   Veiculo.findById(id).exec().then(
      // Callback do bem
      function(veiculo) {  // Zero ou um veículo
         if(veiculo) {   // Veículo encontrado
            res.json(veiculo).end();
         }
         else {          // Veículo não encontrado
            // HTTP 404: Não encontrado
            res.sendStatus(404).end();
         }
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}

controller.atualizar = function(req, res) {
   // Capturar o id de dentro do corpo da requisição
   const id = req.body._id;

   // Encontra o objeto identificado pelo id
   // e substitui seu conteúdo por req.body
   //Veiculo.findByIdAndUpdate(id, req.body).exec().then(
   Veiculo.findOneAndUpdate({_id: id}, req.body).exec().then(
      // Callback do bem
      function(veiculo) {
         if(veiculo) {     // Encontrou e atualizou
            // HTTP 204: OK (sem conteúdo)
            res.sendStatus(204).end();
         }
         else {            // Não encontrou (e não atualizou)
            res.sendStatus(404).end();
         }
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );
}

controller.excluir = function(req, res) {
   // Capturamos o id a partir da url da requisição
   const id = req.params.id;

   Veiculo.findOneAndDelete({_id: id}).exec().then(
      // Callback do bem
      function(veiculo) {     
         if(veiculo) {  // Encontrou e excluiu
            res.sendStatus(204).end();
         }
         else {         // Não encontrou (e não excluiu)
            res.sendStatus(404).end();
         }
         
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   );


}

module.exports = controller;