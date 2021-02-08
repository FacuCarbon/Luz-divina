var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET users listing. */
router.get('/', indexController.index);

router.get('/masajes', indexController.masajes);

router.get('/reiki', indexController.reiki);

router.get('/tarot', indexController.tarot);

router.get('/contacto', indexController.contacto);

module.exports = router;
