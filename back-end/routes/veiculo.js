const express = require('express');
const router = express.Router();
const controller = require('../controllers/veiculo');

router.post('/', controller.novo);

module.exports = router;