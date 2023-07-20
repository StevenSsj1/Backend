
const gasto = require('../controllers/usuarios.controller');
const express = require('express');
const router = express.Router();

router.get('/', gasto.getUsuarios);
router.post('/', gasto.createUsuarios);
router.post('/singin', gasto.ingresoUsuarios);
router.get('/:id', gasto.getUsuario);
router.put('/:id', gasto.editUsuario);
router.delete('/:id', gasto.deleteUsuario);

module.exports = router;