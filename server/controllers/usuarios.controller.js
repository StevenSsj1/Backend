const express = require('express');
const router = express.Router();
const app = express();
const Gasto = require('../models/usuarios')

const gastosController = {};

router.get('/', (req, res) => {
    res.json({ status: 'API works' });
})

gastosController.getUsuarios = async (req, res) => {
    const gastos = await Gasto.find();
    res.json(gastos);
}

gastosController.createUsuarios = async (req, res) => {
    const gasto = new Gasto(req.body);
    console.log(gasto);
    await gasto.save();
    res.json('status: usuario guardado muy bien Carlitos');
}

gastosController.ingresoUsuarios = async (req, res) => {
    const { correo, psw } = req.body;
    
    const user = await Gasto.findOne({ correo });
    if (user) {
      return res.send('Usuario existe')
    }
    if(user.psw === psw){
        return res.send('Contraseña Correcta')
      }
   
  };
gastosController.getUsuario = async (req, res) => {
    console.log(req.params.id);
    const gasto = await Gasto.findById(req.params.id);
    res.json(gasto);
}

gastosController.editUsuario = async (req, res) => {
    const { id } = req.params;
    const gasto = {
        nombre: req.body.nombre,
        ci: req.body.ci,
        empresa: req.body.empresa,
        cargo: req.body.cargo,
        estado: req.body.estado,
        monto: req.body.monto
    };
    await Gasto.findByIdAndUpdate(id, { $set: gasto }, { new: true });
    res.json('status: usuario actualizado MUY BIEN');
}

// gastosController.getUsuarioEstado = async (req, res) => {
//     const estado = req.params.estado;
//     try {
//         const gastosTipo = await Gasto.find({estado:estado});
//         res.json(gastosTipo);
//     } catch (error) {
//         res.status(500).json({ message: "Error al obtener usuarios por estado." });
//     }
// }

gastosController.deleteUsuario = async (req, res) => {
    const gasto = await Gasto.findById(req.params.id);
    await gasto.deleteOne();
    res.json('status: usuario eliminado');
}

module.exports = gastosController;
