import express from 'express';
import PedidoController from '../controllers/pedidoController.js';

const router = express.Router();

router.post('/', PedidoController.criar);
router.get('/', PedidoController.listar);
router.get('/:id', PedidoController.buscar);
router.put('/:id', PedidoController.atualizar);
router.patch('/:id/status', PedidoController.atualizarStatus);
router.delete('/:id', PedidoController.deletar);

export default router;