module.exports = function() {

   let controller = {}; // Objeto vazio

   controller.teste = function (req, res) {

      let json = {
        nome: 'Fulano de tal',
        idade: 33 
      };

      res.send(json);
   }

   return controller;

}