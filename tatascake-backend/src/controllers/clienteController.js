import ClienteService from '../services/clienteService.js';

class ClienteController {
  static async criar(req, res, next) {
    try {
      const cliente = await ClienteService.criar(req.body);
      res.status(201).json({
        success: true,
        message: 'Cliente criado com sucesso!',
        cliente
      });
    } catch (error) {
      next(error);
    }
  }

  static async listar(req, res, next) {
    try {
      const clientes = await ClienteService.listar();
      res.json({
        success: true,
        quantidade: clientes.length,
        clientes
      });
    } catch (error) {
      next(error);
    }
  }

  static async buscar(req, res, next) {
    try {
      const cliente = await ClienteService.buscar(req.params.id);
      res.json({
        success: true,
        cliente
      });
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const cliente = await ClienteService.atualizar(req.params.id, req.body);
      res.json({
        success: true,
        message: 'Cliente atualizado com sucesso!',
        cliente
      });
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      const resultado = await ClienteService.deletar(req.params.id);
      res.json({
        success: true,
        ...resultado
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ClienteController;