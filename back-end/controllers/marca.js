const Marca = require('../models/Marca')(/* construtor */);

const controller = {};

/*
   Toda função de controller que for chamada
   por uma rota deve ter os parâmetros req(uest)
   e res(ponse).
*/
controller.novo = function(req, res) {
   Marca.create(req.body).then(
      // Callback se ser certo
      function() {
         // HTTP 201: Criado

         // GAMBIARRA para não dar erro no front-end
         res.send('');
         
         res.sendStatus(201).end();
      },
      // Callback se der errado
      function(erro) {
         console.error(erro); // Exibe o erro no terminal
         // HTTP 500: Erro interno do servidor
         res.sendStatus(500).end();
      }
   );
}

controller.listar = function(req, res) {

   Marca.find().exec().then(
      // Callback do bem
      function(marcas) {
         // Retorna TODOS os veículos em um vetor,
         // ou um vetor vazio se não tiver nada
         res.json(marcas).end();         
      },
      // Callback do mal
      function(erro) {
         console.error(erro);
         res.sendStatus(500).end();
      }
   
   );

}

controller.obterUm = function(req, res) {
   // Capturamos o id do parâmetro da url
   const id = req.params.id;

   Marca.findById(id).exec().then(
      // Callback do bem
      function(marca) { // Retorna 0 ou 1 veículo
         if(marca) {  // Encontrou
            res.json(marca).end();
         }
         else {   // Não encontrou
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
   // Capturamos o id de dentro do corpo da requisição
   const id = req.body._id;

   // Encontrar o objeto identificado por id
   // e substituir seu conteúdo por req.body
   Marca.findOneAndUpdate({_id: id}, req.body).exec().then(
      // Callback do bem
      function(marca) {
         if(marca) {     // Encontrou e atualizou
            // HTTP 204: Sem conteúdo
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

   // Capturamos o id a partir da URL da rota
   const id = req.params.id;

   Marca.findOneAndDelete({_id: id}).exec().then(
      // Callback do bem
      function(marca) {
         if(marca) {     // Encontrou e excluiu
            res.sendStatus(204).end();
         }
         else {            // Não encontrou (e não excluiu)
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