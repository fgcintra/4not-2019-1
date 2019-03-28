const express = require('express');
const router = express.Router();
const controller = require('../controllers/tipo');

router.post('/', controller.novo);
router.get('/', controller.listar);
router.get('/:id', controller.obterUm);
router.patch('/', controller.atualizar);
router.delete('/:id', controller.excluir);

module.exports = router;