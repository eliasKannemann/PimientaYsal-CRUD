let express = require('express');
let router = express.Router();
/* Destructoring remplaza la palabra controller por los metodos */
let {restaurant,
     formAddResto,
     addResto,
     admin,
     editForm,
     editResto,
     deleteResto} = require('../controllers/adminController');
     
/* GET index => va tener un lugar donde va a tener todos los productos va a mostrar todos los platos  */

router.get('/', admin);

/* GET sucursal / mostrar sucursales o los ingredientes  */
router.get('/sucursal/:id', restaurant);


/* Get formulario / muestra el formulario para agregar platos */
router.get('/addResto', formAddResto); //Solo va a renderizar un formuilario 
/* POST formulario / para capturar los datos   */
router.post('/addResto', addResto);


/* GET muestra Formulario de edicion  */
router.get('/editResto/:id', editForm);
/* PUT recibe los datos de edición */
router.put('/editResto/:id', editResto);

/* DELETE - para borrar una sucursal */
router.delete('/eliminarResto/:id', deleteResto);






module.exports = router;