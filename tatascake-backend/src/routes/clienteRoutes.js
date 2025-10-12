import express from 'express';
import ClienteController from '../controllers/clienteController.js';
import { validateDTO } from '../middlewares/validationMiddleware.js';
import { CriarClienteDTO, AtualizarClienteDTO } from '../dtos/cliente.dto.js';

const router = express.Router();

router.post('/', validateDTO(CriarClienteDTO), ClienteController.criar);
router.get('/', ClienteController.listar);
router.get('/:id', ClienteController.buscar);
router.put('/:id', validateDTO(AtualizarClienteDTO), ClienteController.atualizar);
router.delete('/:id', ClienteController.deletar);

export default router;