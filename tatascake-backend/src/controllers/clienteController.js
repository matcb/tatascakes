import ClienteService from '../services/clienteService.js';
import {
  ClienteResponseDTO,
  ListarClientesResponseDTO
} from '../dtos/cliente.dto.js';

class ClienteController {
  static async criar(req, res, next) {
    try {
      const cliente = await ClienteService.criar(req.validatedData);
      const response = new ClienteResponseDTO(cliente);
      
      res.status(201).json({
        success: true,
        message: 'Cliente criado com sucesso!',
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async listar(req, res, next) {
    try {
      const clientes = await ClienteService.listar();
      const response = new ListarClientesResponseDTO(clientes);
      
      res.json({
        success: true,
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async buscar(req, res, next) {
    try {
      const cliente = await ClienteService.buscar(req.params.id);
      const response = new ClienteResponseDTO(cliente, true);
      
      res.json({
        success: true,
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const cliente = await ClienteService.atualizar(req.params.id, req.validatedData);
      const response = new ClienteResponseDTO(cliente);
      
      res.json({
        success: true,
        message: 'Cliente atualizado com sucesso!',
        data: response
      });
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      await ClienteService.deletar(req.params.id);
      
      res.json({
        success: true,
        message: 'Cliente deletado com sucesso!'
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ClienteController;