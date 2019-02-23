let express = require('express');
let router = express.Router();
let controller = require('../controllers/teste');

router.get('/', controller().teste);

module.exports = router;