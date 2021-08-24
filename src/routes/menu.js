let express = require('express');
let router = express.Router();

let {menu} = require('../controllers/menuController')

router.get('/', menu)


module.exports = router;