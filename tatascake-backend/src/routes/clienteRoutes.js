import express from 'express';
import ClienteController from '../controllers/clienteController.js';

const router = express.Router();

router.post('/', ClienteController.criar);
router.get('/', ClienteController.listar);
router.get('/:id', ClienteController.buscar);
router.put('/:id', ClienteController.atualizar);
router.delete('/:id', ClienteController.deletar);

export default router;